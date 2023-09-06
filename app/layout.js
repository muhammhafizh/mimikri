import "./globals.css";
import { Inter } from "next/font/google";
import Favicon from "/public/logo.svg";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mimikri",
  description: "Mimikri Supply Indonesia",
  keywords: [
    "mimikri",
    "mimikri indonesia",
    "baju murah keren dan berkualitas",
  ],
  icons: [{ rel: "icon", url: Favicon.src }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className + "w-full h-full bg-white"}>
        {children}
      </body>
    </html>
  );
}
