# Helper script to add reference book links to syllabusData.js
import re
import urllib.parse

path = r"C:\Users\Dell\.gemini\antigravity\scratch\ayurveda-bams-platform\js\data\syllabusData.js"

with open(path, "r", encoding="utf-8") as f:
    lines = f.readlines()

output_lines = []
current_title = None

for line in lines:
    title_match = re.search(r'title:\s*"([^"]+)"', line)
    if title_match:
        current_title = title_match.group(1)
    
    # If the line ends an object in referenceBooks (has '}' or '},' and doesn't have link yet)
    if current_title and ("publisher:" in line or "focus:" in line or ("edition:" in line and "publisher:" not in line)):
        if "link:" not in line:
            # Generate appropriate link
            q = urllib.parse.quote_plus(current_title)
            if any(term in current_title.lower() for term in ["samhita", "nighantu", "ratna", "tarangini", "dipika", "kaumudi", "shariram"]):
                link_url = f"https://archive.org/search?query={q}"
            elif any(term in current_title.lower() for term in ["pharmacopoeia", "formulary", "ccras", "ayush", "gcp"]):
                link_url = f"https://www.ayush.gov.in/"
            else:
                link_url = f"https://www.google.com/search?tbm=bks&q={q}"
            
            # Append link to line
            line = line.rstrip()
            if not line.endswith(","):
                line += ","
            line += f' link: "{link_url}"\n'
            current_title = None

    output_lines.append(line)

with open(path, "w", encoding="utf-8") as f:
    f.writelines(output_lines)

print("Successfully updated syllabusData.js with reference book links!")
