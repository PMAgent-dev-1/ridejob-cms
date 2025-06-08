"use client";

import React from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import type { Slider } from "@/types/microcms";

type Props = {
  sliders: Slider[];
};

export function HeroSlider({ sliders }: Props) {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  if (!sliders || sliders.length === 0) {
    return (
      <div className="embla">
        <div className="embla__container">
          <div className="embla__slide">
            <Image
              src="https://picsum.photos/seed/ridejob-fallback/600/400"
              alt="Fallback Image"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        {sliders.map((slider) => (
          <div className="embla__slide" key={slider.id}>
            <Image
              src={slider.image.url}
              alt={slider.id}
              width={slider.image.width}
              height={slider.image.height}
              className="rounded-lg shadow-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
} 