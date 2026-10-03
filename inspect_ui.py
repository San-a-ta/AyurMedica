import re

with open('js/components/pyqViewer.js', 'r', encoding='utf-8') as f:
    pyq_code = f.read()

print("--- PYQ VIEWER HTML TEMPLATE SNIPPETS ---")
for line in pyq_code.splitlines():
    if '<div class=' in line or 'sidebar' in line.lower() or 'grid' in line.lower() or 'flex' in line.lower():
        print(line.strip()[:100])
