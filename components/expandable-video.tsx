"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  src: string;
  className?: string;
}

export default function ExpandableVideo({ src, className }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Autoplaying Preview */}
      <div
        className={`relative cursor-pointer rounded-2xl shadow-black overflow-hidden border-3 border-[#e7e7e7] hover:border-[var(--main-blue)] ${className}`}
        onClick={() => setIsOpen(true)}
      >
        <video
          src={src}
          autoPlay
          muted
          loop
          playsInline
          className="object-cover fill w-full h-full scale-101 origin-center"
        />
      </div>

      {/* Slide-up Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              className="w-full max-w-6xl aspect-video rounded-2xl overflow-hidden shadow-2xl"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -100, opacity: 0 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
            >
              <video
                src={src}
                controls
                autoPlay
                className="w-full h-full object-contain bg-black"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
