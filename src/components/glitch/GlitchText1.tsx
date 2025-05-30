"use client";

import { useState, useEffect, FC } from "react";
import { cn } from "@/lib/utils";

interface GlitchTextProps {
  text: string;
  className?: string;
}

export const GlitchText1: FC<GlitchTextProps> = ({ text, className }) => {
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 150);
    }, 4000);

    return () => clearInterval(glitchInterval);
  }, []);

  return (
    <div className='relative'>
      <h1
        className={cn(
          "relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-[#EE29E8] via-[#2FEBE9] to-[#F0F085] font-black tracking-tight glow-text-strong",
          className,
        )}
      >
        {text}
      </h1>
      {isGlitching && (
        <>
          <h1
            className={cn("absolute top-0 left-0 text-[#EE29E8] z-0 opacity-70", className)}
            style={{
              clipPath: "polygon(0 0, 100% 0, 100% 45%, 0 45%)",
              transform: "translate(-2px, 0)",
              filter: "blur(0.5px)",
            }}
          >
            {text}
          </h1>
          <h1
            className={cn("absolute top-0 left-0 text-[#2FEBE9] z-0 opacity-70", className)}
            style={{
              clipPath: "polygon(0 55%, 100% 55%, 100% 100%, 0 100%)",
              transform: "translate(2px, 0)",
              filter: "blur(0.5px)",
            }}
          >
            {text}
          </h1>
        </>
      )}
    </div>
  );
};
