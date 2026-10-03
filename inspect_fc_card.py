with open('js/components/flashcards.js', 'r', encoding='utf-8') as f:
    code = f.read()

lines = code.splitlines()
print("Lines 100 to 220 of flashcards.js:")
for l in lines[100:220]:
    print(l)
