"use client";

import React from "react";
import type { Player } from "@/utils/game";

type Props = {
  index: number;
  value: Player | null;
  disabled?: boolean;
  highlight?: boolean;
  onClick: (index: number) => void;
};

/**
 * Square represents a single tile on the Tic Tac Toe board.
 * Accessible button with keyboard support (Enter/Space).
 */
export default function Square({ index, value, disabled, highlight, onClick }: Props) {
  const label = value ? `Square ${index + 1}, ${value}` : `Empty square ${index + 1}`;

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (disabled) return;
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onClick(index);
    }
  };

  return (
    <button
      type="button"
      aria-label={label}
      data-testid={`square-${index}`}
      disabled={disabled}
      onClick={() => !disabled && onClick(index)}
      onKeyDown={handleKeyDown}
      className={[
        // Size and layout
        "flex items-center justify-center",
        "w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32",
        // Typography
        "text-3xl sm:text-4xl md:text-5xl font-semibold",
        // Ocean Professional theme styling
        "rounded-xl border transition-colors duration-150 ease-out",
        "border-gray-200",
        value
          ? "bg-white text-[#111827] shadow-sm"
          : "bg-white hover:bg-[#F9FAFB] text-[#111827] shadow-sm",
        highlight ? "ring-2 ring-[#2563EB] ring-offset-2 ring-offset-white" : "",
        disabled ? "opacity-80 cursor-not-allowed" : "cursor-pointer",
        // subtle hover and active accents
        "hover:border-[#2563EB]/50 active:scale-[0.98]",
        // focus accessibility
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]",
      ].join(" ")}
    >
      <span aria-hidden>{value ?? ""}</span>
    </button>
  );
}
