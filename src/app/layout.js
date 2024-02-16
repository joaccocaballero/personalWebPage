/* eslint-disable react/no-unescaped-entities */

import "./globals.css";
import { Inter } from "next/font/google";
import Header from "../../components/header";
import { ActiveSectionContextProvider } from "@/context/activeSectionContext";
import ThemeSwitch from "@/components/theme-swith";
import ThemeContextProvider from "@/context/theme-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Joaquín | Web Developer",
  description: "Software Developer and Computer Engineering Student",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90 h-[5000px]`}
      >
        <div className="bg-midnight-blue-50 absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-full dark:bg-[#946263]"></div>
        <div className="bg-[#C6DFFD] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-full md:left-[-1rem] dark:bg-[#676394]"></div>
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <ThemeSwitch/>
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
