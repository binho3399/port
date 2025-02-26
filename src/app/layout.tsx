import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Montserrat } from "next/font/google";
import localFont from 'next/font/local';
import "./globals.css";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const agnesFont = localFont({
  src: "../assets/fonts/Agnes-Regular.otf",
  variable: '--font-agnes',
  style: 'normal',
});

const montserrat = Montserrat({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
  icons: {
    icon: "https://fonts.googleapis.com/icon?family=Material+Icons",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </head> */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${agnesFont.variable} ${montserrat.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}