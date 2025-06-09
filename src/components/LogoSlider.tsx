"use client";

import Image from "next/image";
import type { Logo } from "@/types/microcms";
import "@/styles/logo-slider.css";

type Props = {
  logos: Logo[];
};

export function LogoSlider({ logos }: Props) {
  if (!logos || logos.length === 0) {
    return null;
  }

  const duplicatedLogos = [...logos, ...logos];

  return (
    <div className="w-full overflow-hidden">
      <div className="flex items-center animate-scroll">
        {duplicatedLogos.map((logo, index) => (
          <div key={`${logo.id}-${index}`} className="flex-shrink-0 mx-8">
            <Image
              src={logo.logo.url}
              alt={logo.company}
              width={150}
              height={60}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
} 