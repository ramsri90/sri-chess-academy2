import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sri Chess Academy | Master Strategic Thinking Through Chess",
  description:
    "Expert chess coaching in Visakhapatnam. Learn from FIDE-rated coaches. Beginner to pro programs.",
  openGraph: {
    title: "Sri Chess Academy | Master Strategic Thinking Through Chess",
    description:
      "Expert chess coaching in Visakhapatnam. Learn from FIDE-rated coaches. Beginner to pro programs.",
    type: "website",
    locale: "en_IN",
    siteName: "Sri Chess Academy",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
