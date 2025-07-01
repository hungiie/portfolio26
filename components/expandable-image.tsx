"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  src: string;
  alt: string;
  className?: string;
}

export default function ExpandableImage({ src, alt, className }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className={`cursor-pointer ${className}`}
        onClick={() => setIsOpen(true)}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover border-[#e7e7e7] border-2 hover:border-[var(--main-blue)] rounded-xl"
        //   sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={src}
                alt={alt}
                fill
                className="rounded-xl object-contain shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
