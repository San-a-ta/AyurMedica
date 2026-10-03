with open('css/styles.css', 'r', encoding='utf-8') as f:
    css = f.read()

lines = css.splitlines()
print("Lines 125 to 190 of styles.css:")
for l in lines[125:190]:
    print(l)
