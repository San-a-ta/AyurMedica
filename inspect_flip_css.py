with open('css/styles.css', 'r', encoding='utf-8') as f:
    css = f.read()

lines = css.splitlines()
print("Lines 80 to 125 of styles.css:")
for l in lines[80:125]:
    print(l)
