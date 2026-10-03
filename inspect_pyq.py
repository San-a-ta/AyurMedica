with open('js/components/pyqViewer.js', 'r', encoding='utf-8') as f:
    code = f.read()

print("pyqViewer total length:", len(code))
# Let's find render function
import re
render_func = re.search(r'render:\s*function[^{]*\{', code)
if render_func:
    print("Found render function:", render_func.group(0))
else:
    # Maybe it's return { render: ... }
    m = re.search(r'function render[^{]*\{', code)
    if m:
        print("Found function render:", m.group(0))
    else:
        print("Searching for 'render' in code:")
        for line in code.splitlines():
            if 'render' in line:
                print(" -", line[:80])
