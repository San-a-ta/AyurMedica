with open('js/components/flashcards.js', 'r', encoding='utf-8') as f:
    code = f.read()

print("FlashcardsViewer code lines:", len(code.splitlines()))

# Let's inspect the render function in flashcards.js
lines = code.splitlines()
for i, l in enumerate(lines[:100]):
    print(l)
