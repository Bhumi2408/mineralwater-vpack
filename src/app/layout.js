import { Open_Sans, Raleway } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  display: "swap",
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Mineral water filling machines",
  description:
    "Vpack Machine Pvt. Ltd. – mineral water plants, CSD plants, beer plants, and pharmaceutical & cosmetics machinery. Headquartered in Bawana, Delhi.",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${openSans.variable} ${raleway.variable}`}>
      <body>{children}</body>
    </html>
  );
}
