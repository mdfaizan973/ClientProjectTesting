import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Faizan Ahmed | Full-Stack Developer",
  description:
    "Full-stack developer specializing in the PERN stack and TypeScript, building production-ready web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-bg text-text">{children}</body>
    </html>
  );
}
