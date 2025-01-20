import type { Metadata } from "next";
import { Noto_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jackson Kelly",
  description: "Jackson Kelly's Portfolio / Profile",
  openGraph: {
    images: [
      {
        url: "https://d7lpkeztx5.ufs.sh/f/ndNtYoS2yiYlOSOL8eGis5ADEctaXvLhGzxuoN8Tm0dWJQVS",
        width: 1200,
        height: 627,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${notoSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
