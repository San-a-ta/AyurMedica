with open('js/components/pyqViewer.js', 'r', encoding='utf-8') as f:
    code = f.read()

lines = code.splitlines()
print("End of pyqViewer.js:")
for l in lines[-40:]:
    print(l)
