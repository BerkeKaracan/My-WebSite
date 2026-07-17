import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next"; 

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Berke Karacan | Full Stack Developer",
  description:
    "Portfolio of Berke Karacan, a Full Stack Developer specializing in Next.js, React, Tailwind CSS, FastAPI, and PostgreSQL. View my latest projects and certifications.",
  keywords: [
    "Berke Karacan",
    "Full Stack Developer",
    "Next.js",
    "React",
    "FastAPI",
    "Portfolio",
    "Software Engineer",
    "Web Development",
  ],
  authors: [{ name: "Berke Karacan" }],
  creator: "Berke Karacan",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://berkekaracan.com",
    title: "Berke Karacan | Full Stack Developer",
    description:
      "Discover the portfolio of Berke Karacan. Specialized in building high-performance web applications with modern technologies.",
    siteName: "Berke Karacan Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Berke Karacan | Full Stack Developer",
    description:
      "Discover the portfolio of Berke Karacan. Specialized in building high-performance web applications with modern technologies.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-800 dark:text-zinc-300">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
