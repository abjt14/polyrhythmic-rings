"use client";

import { MotionConfig } from "framer-motion";

function MotionConfigComponent({ children }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

export default MotionConfigComponent;
