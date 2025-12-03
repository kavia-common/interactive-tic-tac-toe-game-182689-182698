"use client";

import React from "react";
import Square from "./Square";
import Status from "./Status";
import { calculateWinner, getNextPlayer, isDraw, type Player } from "@/utils/game";

/**
 * PUBLIC_INTERFACE
 * Board is the main interactive Tic Tac Toe game UI.
 * - Maintains client-side state for the board and current player.
 * - Detects wins and draws.
 * - Provides accessible controls and a reset action.
 */
export default function Board() {
  const [board, setBoard] = React.useState<Array<Player | null>>(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = React.useState<Player>("X");

  const { winner, line } = calculateWinner(board);
  const draw = isDraw(board);
  const gameOver = Boolean(winner) || draw;

  const handleSquareClick = (index: number) => {
    if (board[index] !== null || gameOver) return;
    const next = [...board];
    next[index] = currentPlayer;
    setBoard(next);
    setCurrentPlayer(getNextPlayer(currentPlayer));
  };

  const handleReset = () => {
    setBoard(Array(9).fill(null));
    setCurrentPlayer("X");
  };

  return (
    <div
      className={[
        "w-full max-w-md",
        "bg-white rounded-2xl shadow-lg border border-gray-100",
        "p-5 sm:p-6",
      ].join(" ")}
      aria-label="Tic Tac Toe Game"
    >
      <div className="space-y-4">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-[#111827]">Tic Tac Toe</h1>
          <p className="text-sm text-gray-500">
            Ocean Professional • Clean and responsive
          </p>
        </div>

        <Status currentPlayer={currentPlayer} winner={winner} isDraw={draw} />

        <div
          className={[
            "grid grid-cols-3 gap-3",
            "mx-auto",
          ].join(" ")}
          role="grid"
          aria-label="Game board"
        >
          {board.map((value, idx) => (
            <div role="gridcell" key={idx}>
              <Square
                index={idx}
                value={value}
                disabled={gameOver || value !== null}
                highlight={line.includes(idx)}
                onClick={handleSquareClick}
              />
            </div>
          ))}
        </div>

        <div className="pt-2">
          <button
            type="button"
            onClick={handleReset}
            data-testid="reset-button"
            className={[
              "w-full rounded-xl px-4 py-2.5 font-medium",
              "bg-[#2563EB] text-white hover:bg-[#1D4ED8]",
              "focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]",
              "transition-colors duration-150 ease-out",
              "shadow-sm",
            ].join(" ")}
            aria-label="Reset game"
          >
            Reset Game
          </button>
        </div>
      </div>
    </div>
  );
}
