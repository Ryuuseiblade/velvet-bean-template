"use client";

import { useEffect } from "react";

export function useBodyScrollLock(locked: boolean): void {
  useEffect(() => {
    const previous = document.body.style.overflow;
    document.body.style.overflow = locked ? "hidden" : previous || "";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [locked]);
}
