# Conway's Game of Life takes place on an infinite two-dimensional board of square cells. Each cell is either dead or alive, and at each tick, the following rules apply:

# Any live cell with less than two live neighbours dies.
# Any live cell with two or three live neighbours remains living.
# Any live cell with more than three live neighbours dies.
# Any dead cell with exactly three live neighbours becomes a live cell.
# A cell neighbours another cell if it is horizontally, vertically, or diagonally adjacent.

# Implement Conway's Game of Life. It should be able to be initialized with a starting list of live cell coordinates and the number of steps it should run for. Once initialized, it should print out the board state at each step. Since it's an infinite board, print out only the relevant coordinates, i.e. from the top-leftmost live cell to bottom-rightmost live cell.

# You can represent a live cell with an asterisk (*) and a dead cell with a dot (.).

class GameOfLife:
    def __init__(self, live_cells, steps):
        self.live_cells = set(live_cells)
        self.steps = steps

    def get_neighbours(self, cell):
        x, y = cell
        return [(x + dx, y + dy) for dx in (-1, 0, 1) for dy in (-1, 0, 1) if not (dx == 0 and dy == 0)]

    def next_state(self):
        new_state = set()
        candidate_cells = self.live_cells.copy()

        # Adding all neighbours of live cells to candidate cells for the next state evaluation
        for cell in self.live_cells:
            candidate_cells.update(self.get_neighbours(cell))

        for cell in candidate_cells:
            count = sum((neighbour in self.live_cells) for neighbour in self.get_neighbours(cell))
            if count == 3 or (count == 2 and cell in self.live_cells):
                new_state.add(cell)

        self.live_cells = new_state

    def print_board(self):
        if not self.live_cells:
            print("All cells are dead.")
            return

        min_x = min(cell[0] for cell in self.live_cells)
        max_x = max(cell[0] for cell in self.live_cells)
        min_y = min(cell[1] for cell in self.live_cells)
        max_y = max(cell[1] for cell in self.live_cells)

        board = []
        for x in range(min_x, max_x + 1):
            row = []
            for y in range(min_y, max_y + 1):
                if (x, y) in self.live_cells:
                    row.append('*')
                else:
                    row.append('.')
            board.append(''.join(row))

        for row in board:
            print(row)
        print()  # Newline for separation between steps

    def run(self):
        print("Initial state:")
        self.print_board()
        for step in range(1, self.steps + 1):
            self.next_state()
            print(f"Step {step}:")
            self.print_board()

# Example usage
initial_cells = [(1, 2), (2, 3), (3, 1), (3, 2), (3, 3)]
game = GameOfLife(initial_cells, 5)
game.run()
