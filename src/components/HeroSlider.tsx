"use client";

import React from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const slides = [
  { src: "https://picsum.photos/seed/ridejob1/600/400", alt: "Slide 1" },
  { src: "https://picsum.photos/seed/ridejob2/600/400", alt: "Slide 2" },
  { src: "https://picsum.photos/seed/ridejob3/600/400", alt: "Slide 3" },
];

export function HeroSlider() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        {slides.map((slide, index) => (
          <div className="embla__slide" key={index}>
            <Image
              src={slide.src}
              alt={slide.alt}
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
} 