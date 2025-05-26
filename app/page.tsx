"use client";

import Image from "next/image";
import Script from "next/script";
import DisplayCards from "@/components/ui/display-cards";
import { GooeyTextDemo } from "@/components/ui/gooey-text-morphing";

const logoCards = [
  {
    icon: (
      <Image
        src="https://automationalien.s3.us-east-1.amazonaws.com/make-logo-png.png"
        alt="Make.com logo"
        width={220}
        height={220}
        className="object-contain"
        style={{ filter: 'none' }}
      />
    ),
    className:
      "hover:-translate-y-10 before:left-0 before:top-0",
    href: "https://www.make.com/en"
  },
  {
    icon: (
      <Image
        src="https://automationalien.s3.us-east-1.amazonaws.com/n8n-logo-png_seeklogo-470809.png"
        alt="n8n logo"
        width={220}
        height={220}
        className="object-contain"
        style={{ filter: 'none' }}
      />
    ),
    className:
      "hover:-translate-y-10 before:left-0 before:top-0",
    href: "https://n8n.io/"
  },
  {
    icon: (
      <Image
        src="https://automationalien.s3.us-east-1.amazonaws.com/Zapier_logo.png"
        alt="Zapier logo"
        width={140}
        height={40}
        className="object-contain"
        style={{ filter: 'none' }}
      />
    ),
    className:
      "hover:-translate-y-10 before:left-0 before:top-0",
    href: "https://zapier.com/"
  },
];

function DisplayCardsDemo() {
  return (
    <div className="flex min-h-[400px] w-full items-center justify-center py-20">
      <div className="w-full max-w-3xl">
        <DisplayCards cards={logoCards} />
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start w-full">
        <a
          href="https://agent.jotform.com/01952a9d3fb275588d4fce8dc19d1aa9d6e0"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Catch the wave - Start Today"
          style={{ textDecoration: 'none', display: 'block', width: '100%' }}
        >
          <GooeyTextDemo />
        </a>
        <DisplayCardsDemo />
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-white"
          href="https://automationalien.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg aria-hidden width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2" />
            <path d="M2 12h20M12 2c2.5 3.5 2.5 14.5 0 20M12 2c-2.5 3.5-2.5 14.5 0 20" stroke="white" strokeWidth="2" />
          </svg>
          <span className="text-white">Visit our Website</span>
        </a>
      </footer>
      <Script
        src="https://cdn.jotfor.ms/agent/embedjs/01952a9d3fb275588d4fce8dc19d1aa9d6e0/embed.js?skipWelcome=1&maximizable=1"
        strategy="afterInteractive"
      />
    </div>
  );
}
