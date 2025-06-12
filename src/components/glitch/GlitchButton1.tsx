"use client";

import { useEffect, useRef } from "react";
import { VFX } from "@vfx-js/core";

export const GlitchButton = () => {
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    let vfx: any;

    const loadEffect = async () => {
      if (!buttonRef.current) return;

      vfx = new VFX();

      const button = buttonRef.current;

      const handleEnter = () => {
        vfx.add(button, { shader: "glitch", overflow: 100 });
      };

      const handleLeave = () => {
        vfx.remove(button);
      };

      button.addEventListener("mouseenter", handleEnter);
      button.addEventListener("mouseleave", handleLeave);

      // クリーンアップ
      return () => {
        button.removeEventListener("mouseenter", handleEnter);
        button.removeEventListener("mouseleave", handleLeave);
        vfx.remove(button);
      };
    };

    const cleanupPromise = loadEffect();

    return () => {
      cleanupPromise.then((cleanup) => cleanup?.());
    };
  }, []);

  return (
    <button ref={buttonRef} className='px-4 py-2 bg-black text-white rounded hover:cursor-pointer'>
      Hover me
    </button>
  );
};
