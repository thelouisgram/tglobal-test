import { Provider } from "@/components/chakra-ui/provider";
import { Manrope, Plus_Jakarta_Sans } from "next/font/google";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "TGLOBAL Roster System",
  description: "Frontend Developer Assignment - Roster System",
};

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-manrope",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta-sans",
});

export default function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props;
  return (
    <html suppressHydrationWarning>
      <body
        className={`${manrope.className} ${plusJakartaSans.variable} antialiased`}
      >
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
