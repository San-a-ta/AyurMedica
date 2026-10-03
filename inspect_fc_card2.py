with open('js/components/flashcards.js', 'r', encoding='utf-8') as f:
    code = f.read()

lines = code.splitlines()
print("Lines 220 to 320 of flashcards.js:")
for l in lines[220:320]:
    print(l)
