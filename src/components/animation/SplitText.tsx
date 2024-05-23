"use client";

import type { ReactNode } from "react";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";

gsap.registerPlugin(SplitType);

interface ISplitText {
  type: "lines" | "words" | "chars";
  children: ReactNode;
}

export default function SplitText({ type, children }: Readonly<ISplitText>) {
  const container = useRef(null);

  useGSAP(
    () => {
      const text = SplitType.create("#text-animation", {
        // types: "lines,words,chars",
        types: type,
        tagName: "span",
      });

      gsap.from(text[type], {
        y: "100%",
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: "power1.out",
      });
    },
    { scope: container }
  );

  return (
    <span ref={container} id="text-animation">
      {children}
    </span>
  );
}
