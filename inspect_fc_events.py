with open('js/components/flashcards.js', 'r', encoding='utf-8') as f:
    code = f.read()

lines = code.splitlines()
print("Lines 800 to 950 of flashcards.js:")
for l in lines[800:950]:
    print(l)
