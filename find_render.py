with open('js/components/pyqViewer.js', 'r', encoding='utf-8') as f:
    code = f.read()

lines = code.splitlines()
for i, line in enumerate(lines):
    if line.strip().startswith('function render('):
        print(f"Found render at line {i+1}:")
        for j in range(i, min(i + 50, len(lines))):
            print(lines[j])
        break
