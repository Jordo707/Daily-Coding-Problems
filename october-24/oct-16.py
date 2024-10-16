# Connect 4 Game Implementation

def create_board():
    return [['.' for _ in range(7)] for _ in range(6)]

def print_board(board):
    print('\n'.join([' '.join(row) for row in board]))
    print('1 2 3 4 5 6 7')  # Column numbers for player reference

def is_valid_move(board, col):
    return board[0][col] == '.'

def get_next_open_row(board, col):
    for row in reversed(range(6)):
        if board[row][col] == '.':
            return row
    return None

def drop_piece(board, row, col, piece):
    board[row][col] = piece

def check_win(board, piece):
    # Horizontal check
    for row in range(6):
        for col in range(4):
            if all(board[row][col + i] == piece for i in range(4)):
                return True

    # Vertical check
    for col in range(7):
        for row in range(3):
            if all(board[row + i][col] == piece for i in range(4)):
                return True

    # Positive slope diagonal check
    for row in range(3, 6):
        for col in range(4):
            if all(board[row - i][col + i] == piece for i in range(4)):
                return True

    # Negative slope diagonal check
    for row in range(3):
        for col in range(4):
            if all(board[row + i][col + i] == piece for i in range(4)):
                return True

    return False

def is_board_full(board):
    return all(board[0][col] != '.' for col in range(7))

def play_game():
    board = create_board()
    game_over = False
    turn = 0  # Player 1 starts (0 for Player 1, 1 for Player 2)
    pieces = ['R', 'Y']  # R for Red, Y for Yellow

    while not game_over:
        print_board(board)
        current_piece = pieces[turn]
        print(f"Player {turn + 1}'s turn ({current_piece})")

        # Input handling
        try:
            col = int(input("Select a column (1-7): ")) - 1
            if col < 0 or col > 6:
                print("Invalid column. Please select a column between 1 and 7.")
                continue
        except ValueError:
            print("Invalid input. Please enter a number between 1 and 7.")
            continue

        if not is_valid_move(board, col):
            print("Column is full. Choose another column.")
            continue

        row = get_next_open_row(board, col)
        drop_piece(board, row, col, current_piece)

        if check_win(board, current_piece):
            print_board(board)
            print(f"Player {turn + 1} ({current_piece}) wins!")
            game_over = True
        elif is_board_full(board):
            print_board(board)
            print("The game is a draw!")
            game_over = True
        else:
            turn = (turn + 1) % 2  # Switch turns

if __name__ == "__main__":
    play_game()
