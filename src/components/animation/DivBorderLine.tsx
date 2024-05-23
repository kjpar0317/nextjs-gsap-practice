"use client";

import type { ReactNode } from "react";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

import "@/assets/styles/effect.css";

gsap.registerPlugin(MotionPathPlugin);

interface IDivBorderLine {
  duration?: number;
  children: ReactNode;
}

export default function DivBorderLine({
  duration = 8,
  children,
}: Readonly<IDivBorderLine>) {
  const container = useRef(null);

  useGSAP(
    () => {
      const resizeObserver = new ResizeObserver((event) => {
        const maxWidth = event[0].contentBoxSize[0].inlineSize;
        const maxHeight = event[0].contentBoxSize[0].blockSize;
        const divElem = container.current as any;

        gsap.to(divElem.querySelector(".animation_line"), {
          duration: duration,
          repeat: -1,
          ease: "linear",
          motionPath: {
            path: [
              { x: 0, y: 0 },
              { x: maxWidth, y: 0 },
              {
                x: maxWidth,
                y: maxHeight,
              },
              { x: 0, y: maxHeight },
              { x: 0, y: 0 },
            ],
            curviness: 0,
            align: divElem.querySelector(".animation_path"),
            autoRotate: true,
            alignOrigin: [0, 0],
          },
        });
      });

      if (container.current) {
        resizeObserver.observe(container.current);
      }
    },
    { scope: container }
  );

  return (
    <div ref={container}>
      <div className="animation_line absolute w-5 h-1 bg-gradient-to-l from-primary to-primary-foreground before:origin-top-center before:translate-x-0 before:bg-primary before:translate-y-0 lightening drop-shadow-2xl"></div>
      <div className="animation_path">{children}</div>
    </div>
  );
}
