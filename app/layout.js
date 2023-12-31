import "./globals.css";
import { Inter } from "next/font/google";
import Favicon from "/public/MIMIKRI-BLACK-LOGO.png";

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
      <body className={inter.className + "w-auto h-auto bg-white"}>
        {children}
      </body>
    </html>
  );
}
