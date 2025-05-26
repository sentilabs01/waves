"use client";

import { cn } from "@/lib/utils";
import { Sparkles } from "lucide-react";
import Image from "next/image";
import React from "react";

interface DisplayCardProps {
  className?: string;
  icon?: React.ReactNode;
  href?: string;
}

function DisplayCard({
  className,
  icon = <Sparkles className="size-4 text-blue-300" />,
  href,
}: DisplayCardProps) {
  const cardContent = (
    <div
      className={cn(
        "relative flex flex-col items-center justify-center select-none transition-all duration-700 hover:rotate-[-8deg] hover:scale-105",
        className
      )}
      style={{ width: 200, height: 600 }}
    >
      {/* Surfboard SVG background */}
      <svg width="200" height="600" viewBox="0 0 200 600" xmlns="http://www.w3.org/2000/svg" className="absolute left-0 top-0 w-full h-full z-0 pointer-events-none">
        <path d="M100,50 C20,100 20,500 100,550 C180,500 180,100 100,50 Z" fill="#ADD8E6" stroke="#4682B4" strokeWidth="5" />
        <path d="M100,70 C40,120 40,480 100,530 C160,480 160,120 100,70 Z" fill="#FFFFFF" stroke="#4682B4" strokeWidth="3" />
      </svg>
      {/* Centered logo/icon, vertical orientation */}
      {React.isValidElement(icon) && icon.props && (icon.props as { alt?: string }).alt === 'Zapier logo' ? (
        <div className="absolute left-1/2" style={{ top: 320, transform: 'translateX(-50%) rotate(90deg)' }}>
          <img
            src={(icon.props as { src: string }).src}
            alt={(icon.props as { alt: string }).alt}
            width={70}
            height={28}
            style={{ objectFit: 'contain', filter: 'none' }}
          />
        </div>
      ) : (
        <div className="absolute left-1/2" style={{ top: 270, transform: 'translateX(-50%) rotate(90deg)' }}>
          {icon}
        </div>
      )}
    </div>
  );
  return href ? (
    <a href={href} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
      {cardContent}
    </a>
  ) : cardContent;
}

interface DisplayCardsProps {
  cards?: DisplayCardProps[];
}

export default function DisplayCards({ cards }: DisplayCardsProps) {
  const defaultCards = [
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
        "z-40 hover:-translate-y-10 left-0 top-0",
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
        "z-30 hover:-translate-y-10 left-0 top-0",
    },
    {
      icon: (
        <Image
          src="https://automationalien.s3.us-east-1.amazonaws.com/Zapier_logo.png"
          alt="Zapier logo"
          width={90}
          height={36}
          className="object-contain"
          style={{ filter: 'none' }}
        />
      ),
      className:
        "z-20 hover:-translate-y-10 left-0 top-0",
    },
  ];

  const displayCards = cards || defaultCards;

  return (
    <div className="flex flex-row gap-6 justify-center opacity-100 animate-in fade-in-0 duration-700">
      {displayCards.map((cardProps, index) => (
        <DisplayCard key={index} {...cardProps} />
      ))}
    </div>
  );
}