with open('css/styles.css', 'r', encoding='utf-8') as f:
    css = f.read()

# Let's inspect the media queries in styles.css
import re
queries = re.findall(r'@media[^{]+\{', css)
print("Media queries in styles.css:")
for q in queries:
    print(" -", q.strip())

# Let's see lines 1170 to 1301 in styles.css (RESPONSIVE section)
lines = css.splitlines()
print("\n--- RESPONSIVE SECTION IN styles.css ---")
for l in lines[1170:1240]:
    print(l)
