# # FIGlet, named after Frank, Ian, and Glen’s letters, is a program from the early 1990s for making large letters out of ordinary text, a form of ASCII art.
# Among the fonts supported by FIGlet are those at figlet.org/examples.html.

# FIGlet has since been ported to Python as a module called pyfiglet.

# In a file called figlet.py, implement a program that:

#     Expects zero or two command-line arguments:
#         Zero if the user would like to output text in a random font.
#         Two if the user would like to output text in a specific font, in which case the first of the two should be -f or --font, and the second of the two should be the name of the font.
#     Prompts the user for a str of text.
#     Outputs that text in the desired font.

# If the user provides two command-line arguments and the first is not -f or --font or the second is not the name of a font, the program should exit via sys.exit with an error message.

# import libraries
from pyfiglet import Figlet
import random
import sys

# font list
fonts = [
    "3-d",
    "3x5",
    "5lineoblique",
    "acrobatic",
    "alligator",
    "alligator2",
    "alphabet",
    "avatar",
    "banner",
    "banner3-D",
    "banner3",
    "banner4",
    "barbwire",
    "basic",
    "bell",
    "big",
    "bigchief",
    "binary",
    "block",
    "bubble",
    "bulbhead",
    "calgphy2",
    "caligraphy",
    "catwalk",
    "chunky",
    "coinstak",
    "colossal",
    "computer",
    "contessa",
    "contrast",
    "cosmic",
    "cosmike",
    "cricket",
    "cursive",
    "cyberlarge",
    "cybermedium",
    "cybersmall",
    "diamond",
    "digital",
    "doh",
    "doom",
    "dotmatrix",
    "drpepper",
    "eftichess",
    "eftifont",
    "eftipiti",
    "eftirobot",
    "eftitalic",
    "eftiwall",
    "eftiwater",
    "epic",
    "fender",
    "fourtops",
    "fuzzy",
    "goofy",
    "gothic",
    "graffiti",
    "hollywood",
    "invita",
    "isometric1",
    "isometric2",
    "isometric3",
    "isometric4",
    "italic",
    "ivrit",
    "jazmine",
    "jerusalem",
    "katakana",
    "kban",
    "larry3d",
    "lcd",
    "lean",
    "letters",
    "linux",
    "lockergnome",
    "madrid",
    "marquee",
    "maxfour",
    "mike",
    "mini",
    "mirror",
    "mnemonic",
    "morse",
    "moscow",
    "nancyj-fancy",
    "nancyj-underlined",
    "nancyj",
    "nipples",
    "ntgreek",
    "o8",
    "ogre",
    "pawp",
    "peaks",
    "pebbles",
    "pepper",
    "poison",
    "puffy",
    "pyramid",
    "rectangles",
    "relief",
    "relief2",
    "rev",
    "roman",
    "rot13",
    "rounded",
    "rowancap",
    "rozzo",
    "runic",
    "runyc",
    "sblood",
    "script",
    "serifcap",
    "shadow",
    "short",
    "slant",
    "slide",
    "slscript",
    "small",
    "smisome1",
    "smkeyboard",
    "smscript",
    "smshadow",
    "smslant",
    "smtengwar",
    "speed",
    "stampatello",
    "standard",
    "starwars",
    "stellar",
    "stop",
    "straight",
    "tanja",
    "tengwar",
    "term",
    "thick",
    "thin",
    "threepoint",
    "ticks",
    "ticksslant",
    "tinker-toy",
    "tombstone",
    "trek",
    "tsalagi",
    "twopoint",
    "univers",
    "usaflag",
    "wavy",
    "weird",
]

# prompt user
phrase = input("Input: ")

# no command-line arguments
if len(sys.argv) == 1:
    # generate a random number to pick a font from the font list
    number = random.randint(0, 147)
    # use the FIGlet library to get the font coding for that value
    # and assign the result to a variable
    out = Figlet(font=fonts[number])
    # output the phrase rendered in the chosen font using that font coding
    print(f"Output: {out.renderText(f'{phrase}')}")

# correct number of command-line arguments
elif len(sys.argv) == 3:
    # 1st argument to be one of two phrases
    if sys.argv[1] in ["-f", "--font"]:
        # use the FIGlet library to get the font coding for the requested font
        # and assign the result to a variable
        out = Figlet(font=sys.argv[2])
        # output the phrase rendered in the chosen font using that font coding
        print(f"Output: {out.renderText(f'{phrase}')}")

# none of the conditions is met
else:
    print("Error: must input no arguments or two")
    sys.exit(1)
