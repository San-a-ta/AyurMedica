with open('css/styles.css', 'r', encoding='utf-8') as f:
    css = f.read()

import re
fixed_widths = re.findall(r'(\b(?:width|min-width|max-width)\s*:\s*([0-9]+px)[^;]*;)', css)
print(f"Total fixed width declarations: {len(fixed_widths)}")
for fw in fixed_widths:
    val = int(re.search(r'([0-9]+)px', fw[1]).group(1))
    if val > 320:
        print("Large fixed width:", fw[0])
