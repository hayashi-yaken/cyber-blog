import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "cyber-blog",
  description: "最新の技術やトレンドについての情報を発信します。",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ja'>
      <body>{children}</body>
    </html>
  );
}
