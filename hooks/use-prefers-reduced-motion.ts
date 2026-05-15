"use client";

import { useReducedMotion } from "framer-motion";

/** True when the user prefers reduced motion — skip decorative animations. */
export function usePrefersReducedMotion(): boolean {
  return useReducedMotion() ?? false;
}
