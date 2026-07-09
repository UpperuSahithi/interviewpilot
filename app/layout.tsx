import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "InterviewPilot - AI-Powered Interview Preparation",
  description:
    "Master your interviews with AI-powered mock interviews, resume analysis, and real-time feedback. Practice for tech, PM, design, and HR roles.",
  keywords:
    "interview preparation, mock interviews, resume analyzer, AI coaching, job interview prep",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html
        lang="en"
        className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
        suppressHydrationWarning
      >
        <body className="min-h-full flex flex-col">
          <a href="#main-content" className="skip-link">
            Skip to main content
          </a>

          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}