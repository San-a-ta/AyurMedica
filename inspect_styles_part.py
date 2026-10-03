with open('css/styles.css', 'r', encoding='utf-8') as f:
    css = f.read()

lines = css.splitlines()
print("Lines 290 to 400 of styles.css:")
for l in lines[290:400]:
    print(l)
