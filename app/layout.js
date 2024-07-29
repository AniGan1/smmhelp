import Image from "next/image"; 

import { Montserrat } from "next/font/google";

import "./reset.css";
import "./main.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "SMMHelp",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
