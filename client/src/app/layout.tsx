import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import ConvexClientProvider from "./providers/ConvexClientProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Podcast",
  description: "Generated your podcast with AI",
  icons: {
    icon: '/icons/logo.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ConvexClientProvider>
          {children}
        </ConvexClientProvider>
        </body>
    </html>
  );
}
