"use client";

import { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
} from "framer-motion";

export default function GlobalEffects() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const smoothX = useSpring(cursorX, {
    stiffness: 500,
    damping: 35,
    mass: 0.4,
  });

  const smoothY = useSpring(cursorY, {
    stiffness: 500,
    damping: 35,
    mass: 0.4,
  });

  const { scrollYProgress } = useScroll();

  const [isDesktop, setIsDesktop] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [cursorText, setCursorText] = useState("");

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      "(min-width: 1024px) and (hover: hover) and (pointer: fine)"
    );

    const updateDevice = () => {
      setIsDesktop(mediaQuery.matches);
    };

    updateDevice();

    mediaQuery.addEventListener("change", updateDevice);

    return () => {
      mediaQuery.removeEventListener(
        "change",
        updateDevice
      );
    };
  }, []);

  useEffect(() => {
    if (!isDesktop) {
      setIsVisible(false);
      setIsHovering(false);
      setCursorText("");
      return;
    }

    const handleMouseMove = (
      event: MouseEvent
    ) => {
      cursorX.set(event.clientX);
      cursorY.set(event.clientY);

      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const handlePointerOver = (
      event: PointerEvent
    ) => {
      const target =
        event.target as HTMLElement;

      const interactive =
        target.closest<HTMLElement>(
          "a, button, [data-cursor]"
        );

      if (!interactive) {
        return;
      }

      setIsHovering(true);

      const text =
        interactive.dataset.cursor || "";

      setCursorText(text);
    };

    const handlePointerOut = (
      event: PointerEvent
    ) => {
      const target =
        event.target as HTMLElement;

      const interactive =
        target.closest<HTMLElement>(
          "a, button, [data-cursor]"
        );

      if (!interactive) {
        return;
      }

      const relatedTarget =
        event.relatedTarget as Node | null;

      if (
        relatedTarget &&
        interactive.contains(relatedTarget)
      ) {
        return;
      }

      setIsHovering(false);
      setCursorText("");
    };

    window.addEventListener(
      "mousemove",
      handleMouseMove
    );

    document.addEventListener(
      "mouseleave",
      handleMouseLeave
    );

    document.addEventListener(
      "mouseenter",
      handleMouseEnter
    );

    document.addEventListener(
      "pointerover",
      handlePointerOver
    );

    document.addEventListener(
      "pointerout",
      handlePointerOut
    );

    return () => {
      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );

      document.removeEventListener(
        "mouseleave",
        handleMouseLeave
      );

      document.removeEventListener(
        "mouseenter",
        handleMouseEnter
      );

      document.removeEventListener(
        "pointerover",
        handlePointerOver
      );

      document.removeEventListener(
        "pointerout",
        handlePointerOut
      );
    };
  }, [
    isDesktop,
    cursorX,
    cursorY,
  ]);

  return (
    <>
      {/* ==========================================
          SCROLL PROGRESS
      ========================================== */}

      <motion.div
        style={{
          scaleX: scrollYProgress,
        }}
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-[3px] w-full origin-left bg-[#e83e8c]"
      />

      {/* ==========================================
          CUSTOM DESKTOP CURSOR
      ========================================== */}

      {isDesktop && (
        <>
          <motion.div
            style={{
              x: smoothX,
              y: smoothY,
            }}
            animate={{
              opacity: isVisible ? 1 : 0,

              width: isHovering
                ? cursorText
                  ? 82
                  : 48
                : 10,

              height: isHovering
                ? cursorText
                  ? 82
                  : 48
                : 10,

              backgroundColor: isHovering
                ? "#e83e8c"
                : "#111111",
            }}
            transition={{
              width: {
                duration: 0.25,
              },

              height: {
                duration: 0.25,
              },

              backgroundColor: {
                duration: 0.2,
              },

              opacity: {
                duration: 0.15,
              },
            }}
            className="pointer-events-none fixed left-0 top-0 z-[9998] flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full shadow-[0_8px_35px_rgba(0,0,0,0.15)]"
          >
            {cursorText && (
              <span className="px-2 text-center text-[8px] font-medium uppercase leading-3 tracking-[0.14em] text-white">
                {cursorText}
              </span>
            )}
          </motion.div>

          {/* OUTER RING */}

          <motion.div
            style={{
              x: smoothX,
              y: smoothY,
            }}
            animate={{
              opacity:
                isVisible && !isHovering
                  ? 0.3
                  : 0,

              scale: isHovering
                ? 0.7
                : 1,
            }}
            transition={{
              duration: 0.2,
            }}
            className="pointer-events-none fixed left-0 top-0 z-[9997] h-9 w-9 -translate-x-1/2 -translate-y-1/2 rounded-full border border-black/60"
          />
        </>
      )}
    </>
  );
}