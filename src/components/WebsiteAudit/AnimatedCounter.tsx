"use client";

import { useEffect, useState } from "react";

type AnimatedCounterProps = {
  value: number;
  suffix?: string;
};

export function AnimatedCounter({ value, suffix = "" }: AnimatedCounterProps) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    let frame = 0;
    const totalFrames = 24;
    const timer = window.setInterval(() => {
      frame += 1;
      const progress = frame / totalFrames;
      setDisplay(Math.round(value * progress));

      if (frame >= totalFrames) {
        window.clearInterval(timer);
        setDisplay(value);
      }
    }, 16);

    return () => window.clearInterval(timer);
  }, [value]);

  return (
    <span>
      {display}
      {suffix}
    </span>
  );
}
