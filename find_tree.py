import sys
sys.stdout.reconfigure(encoding='utf-8')
with open('js/components/pyqViewer.js', 'r', encoding='utf-8') as f:
    code = f.read()

lines = code.splitlines()
print("Lines 630 to 720 of pyqViewer.js:")
for l in lines[630:720]:
    print(l)
