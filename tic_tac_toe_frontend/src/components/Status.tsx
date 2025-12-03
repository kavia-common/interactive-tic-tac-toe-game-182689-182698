"use client";

import React from "react";
import type { Player } from "@/utils/game";

type Props = {
  currentPlayer: Player;
  winner: Player | null;
  isDraw: boolean;
};

/**
 * Status banner shows current player turn, winner, or draw message.
 * Uses chess icon labels for accessibility: Knight for X, Queen for O.
 */
export default function Status({ currentPlayer, winner, isDraw }: Props) {
  const iconVisual = (p: Player) => (
    <span aria-hidden className="inline-flex items-center justify-center align-[-2px]">
      {p === "X" ? (
        <svg viewBox="0 0 24 24" className="w-5 h-5 mr-1">
          <path
            d="M19 22H5v-2h1v-2.5c0-1.657 1.343-3 3-3h3.5c.276 0 .5-.224.5-.5 0-.828-.672-1.5-1.5-1.5H9.5c-.276 0-.5-.224-.5-.5V9.414l-1.293 1.293a1 1 0 0 1-1.414 0L4.586 9.5a1 1 0 0 1 0-1.414l4.95-4.95A3 3 0 0 1 12.657 2H14a5 5 0 0 1 5 5v2.586l1.207 1.207a1 1 0 0 1 .293.707V12a3 3 0 0 1-3 3h-1.382A2.5 2.5 0 0 1 14 17.5V20h5v2zM13 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
            fill="#111827"
          />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" className="w-5 h-5 mr-1">
          <path
            d="M4 20h16v2H4v-2zm12.5-12.5a1.5 1.5 0 1 1 2.121-2.121A1.5 1.5 0 0 1 16.5 7.5zM5.379 7.5A1.5 1.5 0 1 1 7.5 5.379 1.5 1.5 0 0 1 5.379 7.5zM12 6a1.5 1.5 0 1 1 0-3 1.5 1.5 0  0 1 0 3zm6 3-2 7H8l-2-7 3 2 3-3 3 3 3-2zM8 18h8v1H8v-1z"
            fill="#2563EB"
          />
        </svg>
      )}
    </span>
  );

  let message: React.ReactNode;
  let tone: "info" | "success" | "error" = "info";

  if (winner) {
    message = (
      <span>
        {iconVisual(winner)}
        <span className="sr-only">{winner === "X" ? "X - Knight" : "O - Queen"}: </span>
        Player {winner} wins!
      </span>
    );
    tone = "success";
  } else if (isDraw) {
    message = "It&apos;s a draw.";
    tone = "error";
  } else {
    message = (
      <span>
        {iconVisual(currentPlayer)}
        <span className="sr-only">{currentPlayer === "X" ? "X - Knight" : "O - Queen"}: </span>
        Player {currentPlayer}&apos;s turn
      </span>
    );
  }

  const toneClasses =
    tone === "success"
      ? "bg-[#F59E0B]/10 text-[#111827] border-[#F59E0B]/30"
      : tone === "error"
      ? "bg-[#EF4444]/10 text-[#111827] border-[#EF4444]/30"
      : "bg-[#2563EB]/10 text-[#111827] border-[#2563EB]/30";

  return (
    <div
      role="status"
      aria-live="polite"
      data-testid="status"
      className={[
        "w-full rounded-xl border px-4 py-3",
        "shadow-sm",
        toneClasses,
      ].join(" ")}
      aria-label={
        winner
          ? `Winner: ${winner === "X" ? "X - Knight" : "O - Queen"}`
          : isDraw
          ? "Draw"
          : `Turn: ${currentPlayer === "X" ? "X - Knight" : "O - Queen"}`
      }
    >
      <p className="text-center font-medium">{message}</p>
    </div>
  );
}
