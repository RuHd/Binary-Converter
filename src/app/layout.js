import { Quantico } from "next/font/google";
import "./globals.css";

const quantico = Quantico({
  variable: "--font-quantico",
  subsets: ["latin"],
  weight: ["400","700"]
});

export const metadata = {
  title: "Binary/Decimal Converter",
  description: "Created By Ruan Mesquita",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${quantico.variable}`}>
        {children}
      </body>
    </html>
  );
}
