"use client";

import React from "react";
import Board from "@/components/Board";

/**
 * Home page renders the Tic Tac Toe game centered on the screen.
 * Notes:
 * - Pure client-side state; no backend calls.
 * - Accessible controls with test IDs for automation.
 */
export default function Home() {
  return (
    <main
      className={[
        "min-h-screen",
        "flex items-center justify-center",
        "px-4",
      ].join(" ")}
    >
      <div className="w-full max-w-3xl">
        <div className="mx-auto flex flex-col items-center gap-6">
          <div
            className={[
              "w-full text-center",
              "rounded-2xl px-4 py-5",
              "bg-white/60 backdrop-blur",
              "border border-gray-100 shadow-sm",
            ].join(" ")}
          >
            <h1 className="text-3xl font-bold text-[#111827]">Tic Tac Toe</h1>
            <p className="text-sm text-gray-600">
              Two players. X starts. First to 3 in a row wins.
            </p>
          </div>

          <Board />
        </div>
      </div>
    </main>
  );
}
