import { Inter } from "next/font/google";
import "./globals.css";
import MotionConfigComponent from "@/components/MotionConfigComponent";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Polyrhythmic Rings",
  description:
    "Relaxing tunes and visuals to help you focus, meditate, or sleep. Inspired by Hyperplexed's video on their YouTube channel.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MotionConfigComponent>{children}</MotionConfigComponent>
      </body>
    </html>
  );
}
