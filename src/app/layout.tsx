import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { NavbarDemo } from "@/components/Navbar";
import Head from "next/head";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  // Optional: Use as variable if you want to combine with other fonts
  // variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: "Cyborg Robotics Academy Private Limited",
  description:
    "Cyborg Robotics Academy Private Limited, based in Pune, offers technical courses like Lego Robotics, Electronics, Arduino, IoT, Python, Java, Web Design, App Design, 3D Printing, Animation and Coding. Our hands-on programs emphasize Learning by Doing to develop problem-solving and inquiry skills.",
};

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <meta
          property="og:title"
          content="Cyborg Robotics Academy Private Limited"
        />
        <meta
          property="og:description"
          content="Cyborg Robotics Academy Private Limited, based in Pune, offers technical courses like Lego Robotics, Electronics, Arduino, IoT, Python, Java, Web Design, App Design, 3D Printing, Animation and Coding. Our hands-on programs emphasize Learning by Doing to develop problem-solving and inquiry skills."
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={`${poppins.className} antialiased`}>
        <NavbarDemo />
        {/* Add margin-top to prevent content from being hidden behind the fixed navbar */}
        <div className="mt-24">{children}</div>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
