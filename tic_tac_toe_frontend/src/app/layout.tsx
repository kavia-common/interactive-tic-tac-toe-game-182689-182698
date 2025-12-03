import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tic Tac Toe • Ocean Professional",
  description:
    "A clean, modern Tic Tac Toe game built with Next.js and Tailwind CSS. Two players — X starts — first to 3 in a row wins.",
  metadataBase:
    typeof window === "undefined" ? new URL("http://localhost:3000") : undefined,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
