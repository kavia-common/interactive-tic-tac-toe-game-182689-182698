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
 */
export default function Status({ currentPlayer, winner, isDraw }: Props) {
  let message: string;
  let tone: "info" | "success" | "error" = "info";

  if (winner) {
    message = `Player ${winner} wins!`;
    tone = "success";
  } else if (isDraw) {
    message = "It's a draw.";
    tone = "error";
  } else {
    message = `Player ${currentPlayer}'s turn`;
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
    >
      <p className="text-center font-medium">{message}</p>
    </div>
  );
}
