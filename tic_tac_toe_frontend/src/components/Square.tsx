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
 * Renders chess icons: Knight for X, Queen for O.
 */
export default function Square({ index, value, disabled, highlight, onClick }: Props) {
  // Accessible label includes icon mapping for screen readers
  const label = value
    ? `Square ${index + 1}, ${value === "X" ? "X - Knight" : "O - Queen"}`
    : `Empty square ${index + 1}`;

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (disabled) return;
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onClick(index);
    }
  };

  // Inline SVGs for lightweight icons with no dependencies.
  // Icons sized to fit the square with good balance and theme colors.
  const KnightIcon = (
    <svg
      viewBox="0 0 24 24"
      className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14"
      role="img"
      aria-label="Knight"
      focusable="false"
    >
      <path
        d="M19 22H5v-2h1v-2.5c0-1.657 1.343-3 3-3h3.5c.276 0 .5-.224.5-.5 0-.828-.672-1.5-1.5-1.5H9.5c-.276 0-.5-.224-.5-.5V9.414l-1.293 1.293a1 1 0 0 1-1.414 0L4.586 9.5a1 1 0 0 1 0-1.414l4.95-4.95A3 3 0 0 1 12.657 2H14a5 5 0 0 1 5 5v2.586l1.207 1.207a1 1 0 0 1 .293.707V12a3 3 0 0 1-3 3h-1.382A2.5 2.5 0 0 1 14 17.5V20h5v2zM13 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
        fill="#111827"
      />
    </svg>
  );

  const QueenIcon = (
    <svg
      viewBox="0 0 24 24"
      className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14"
      role="img"
      aria-label="Queen"
      focusable="false"
    >
      <path
        d="M4 20h16v2H4v-2zm12.5-12.5a1.5 1.5 0 1 1 2.121-2.121A1.5 1.5 0 0 1 16.5 7.5zM5.379 7.5A1.5 1.5 0 1 1 7.5 5.379 1.5 1.5 0 0 1 5.379 7.5zM12 6a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm6 3-2 7H8l-2-7 3 2 3-3 3 3 3-2zM8 18h8v1H8v-1z"
        fill="#2563EB"
      />
    </svg>
  );

  const renderIcon = () => {
    if (value === "X") return KnightIcon;
    if (value === "O") return QueenIcon;
    return null;
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
        // Ocean Professional theme styling
        "rounded-xl border transition-all duration-150 ease-out",
        "border-gray-200",
        value ? "bg-white text-[#111827] shadow-sm" : "bg-white hover:bg-[#F9FAFB] text-[#111827] shadow-sm",
        highlight ? "ring-2 ring-[#2563EB] ring-offset-2 ring-offset-white" : "",
        disabled ? "opacity-80 cursor-not-allowed" : "cursor-pointer",
        // subtle hover and active accents
        "hover:border-[#2563EB]/50 active:scale-[0.98]",
        // focus accessibility
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]",
      ].join(" ")}
    >
      <span aria-hidden className="flex items-center justify-center">
        {renderIcon()}
      </span>
    </button>
  );
}
