import sys
sys.stdout.reconfigure(encoding='utf-8')
with open('js/components/flashcards.js', 'r', encoding='utf-8') as f:
    code = f.read()

lines = code.splitlines()
print("Lines 1100 to 1370 of flashcards.js:")
for l in lines[1100:]:
    print(l)
