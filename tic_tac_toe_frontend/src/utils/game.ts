"use client";

/**
 * Utility functions for Tic Tac Toe game logic: winner detection, draw detection, and helpers.
 * Ocean Professional theme: No external dependencies; strictly client-side.
 */

// PUBLIC_INTERFACE
export function calculateWinner(board: Array<Player | null>): WinnerResult {
  /**
   * Determine the winner for the current board.
   * Checks all rows, columns, and diagonals. If a three-in-a-row is found,
   * returns the winning player symbol and the indices that form the line.
   *
   * Args:
   *  - board: An array of 9 items (indices 0..8) containing 'X' | 'O' | null
   * Returns:
   *  - { winner: 'X' | 'O', line: number[] } if there is a winner
   *  - { winner: null, line: [] } otherwise
   */
  const lines = [
    // Rows
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    // Cols
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    // Diagonals
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const [a, b, c] of lines) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return { winner: board[a], line: [a, b, c] };
    }
  }
  return { winner: null, line: [] };
}

// PUBLIC_INTERFACE
export function isDraw(board: Array<Player | null>): boolean {
  /** Returns true if all squares are filled and there is no winner. */
  return board.every((s) => s !== null) && !calculateWinner(board).winner;
}

// PUBLIC_INTERFACE
export function getNextPlayer(current: Player): Player {
  /** Returns the alternate player symbol. */
  return current === "X" ? "O" : "X";
}

export type Player = "X" | "O";

export type WinnerResult = {
  winner: Player | null;
  line: number[];
};
