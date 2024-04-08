# Write an algorithm to justify text. Given a sequence of words and an integer line length k, return a list of strings which represents each line, fully justified.

# More specifically, you should have as many words as possible in each line. There should be at least one space between each word. Pad extra spaces when necessary so that each line has exactly length k. Spaces should be distributed as equally as possible, with the extra spaces, if any, distributed starting from the left.

# If you can only fit one word on a line, then you should pad the right-hand side with spaces.

# Each word is guaranteed not to be longer than k.

# For example, given the list of words ["the", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"] and k = 16, you should return the following:

# ["the  quick brown", # 1 extra space on the left
# "fox  jumps  over", # 2 extra spaces distributed evenly
# "the   lazy   dog"] # 4 extra spaces distributed evenly

def justify_text(words, k):
    # create helper function to justify a single line
    def justify_line(line_words, line_length):
        if len(line_words) == 1:
            return line_words[0] + ' ' * (k - line_length)
        else:
            spaces_needed = k - line_length
            spaces_between = spaces_needed // (len(line_words) -1)
            extra_spaces = spaces_needed % (len(line_words) - 1)

            justified_line = ''
            for i, word in enumerate(line_words):
                if i < len(line_words) - 1:
                    justified_line += word + ' ' * (spaces_between + (1 if i < extra_spaces else 0))
                else:
                    justified_line += word
            return justified_line

    # group words into lines
    lines = []
    current_line = []
    current_length = 0
    for word in words:
        if current_length + len(word) + len(current_line) > k:
            lines.append(justify_line(current_line, current_length))
            current_line = [word]
            current_length = len(word)
        else:
            current_line.append(word)
            current_length += len(word)

    lines.append(' '.join(current_line).ljust(k))

    return lines

# test case
words = ["the", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"]
k = 16
justified_text = justify_text(words, k)
for line in justified_text:
    print(f'"{line}"')
