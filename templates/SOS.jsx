"use client";
import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";

const SOS = ({ children }) => {
  const scrollRef = useRef(null);
  return (
    <div ref={scrollRef} style={{ overflow: "hidden" }}>
      <motion.div
        variants={{ offscreen: { opacity: 0 }, onscreen: { opacity: 1 } }}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default SOS;
