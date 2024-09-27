"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    img: string;
    name: string;
    title: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);
  const [imageHeights, setImageHeights] = useState<number[]>([]);

  useEffect(() => {
    addAnimation();
  }, []);

  useEffect(() => {
    calculateImageHeights();
  }, [items]);

  const [start, setStart] = useState(false);

  const addAnimation = () => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  };

  const getDirection = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse"
      );
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-duration",
        speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s"
      );
    }
  };

  const calculateImageHeights = () => {
    const heights = items.map((item, idx) => {
      const img = new Image();
      img.src = item.img;
      return img.naturalHeight;
    });
    setImageHeights(heights);
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 w-screen overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-8 py-4 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            className="w-[85vw] max-w-[400px] relative rounded-xl border border-slate-800 p-4 flex-shrink-0 bg-gradient-to-r from-[#04071D] to-[#0C0E23]"
            key={idx}
          >
            <blockquote className="flex flex-col items-center">
              {/* Image with object-contain to ensure full visibility */}
              <img
                src={item.img}
                alt={item.name}
                className={cn(
                  "rounded-md object-contain w-full", // Changed from object-cover to object-contain
                  item.img === "cert-2.1.jpg"
                    ? "h-[350px]" // Increased height from 300px to 320px
                    : `h-[${imageHeights[idx] + 20}px]` // Slightly increased dynamic height by 20px
                )}
              />

              {/* Title positioned below the image */}
              {/* <div className="mt-2 text-center">
                <span className="text-lg leading-tight text-white font-semibold">
                  {item.title}
                </span>
              </div> */}
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};