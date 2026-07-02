import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, DM_Sans, Sacramento } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const sacramento = Sacramento({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-sacramento",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-cormorant",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Love Babe & Bean — Hand-Whisked Matcha & Coffee",
  description:
    "A cosy hole-in-the-wall coffee and matcha shop in Newmarket, Auckland. Hand-whisked matcha, cold brew with cold foam, and sweet treats.",
  openGraph: {
    title: "Love Babe & Bean",
    description:
      "Every matcha is hand-whisked. Find us down Osbourne Lane, Newmarket.",
    type: "website",
    locale: "en_NZ",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${sacramento.variable} ${cormorant.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
