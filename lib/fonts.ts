import { Vazirmatn, JetBrains_Mono } from "next/font/google";

// Vazirmatn is a modern, highly legible variable Persian/Arabic typeface
// with a real Latin companion — used for every headline and body line.
export const vazirmatn = Vazirmatn({
  subsets: ["arabic", "latin"],
  variable: "--font-vazirmatn",
  display: "swap",
});

// Kept from the source moodboard's terminal feel, but used sparingly —
// only for eyebrows, dates, and the odd status line, always in LTR.
export const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-jetbrains",
  display: "swap",
});
