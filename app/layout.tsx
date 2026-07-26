import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Omar Medhat — UI/UX Designer & Front-End Developer",
  description:
    "Designer-engineer working across UI/UX and front-end. Selected work: RHB Hospitality and Dar Senosi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

