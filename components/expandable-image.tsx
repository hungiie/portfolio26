"use client";

import Image from "next/image";
import { useState, useRef, useLayoutEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  src: string;
  alt: string;
  className?: string;
}

export default function ExpandableImage({ src, alt, className }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [naturalSize, setNaturalSize] = useState({ width: 4, height: 3 }); // fallback to 4:3
  const imgRef = useRef<HTMLImageElement | null>(null);

  // Load natural size for dynamic aspect ratio
  useLayoutEffect(() => {
    if (imgRef.current) {
      const img = imgRef.current;
      if (img.naturalWidth && img.naturalHeight) {
        setNaturalSize({
          width: img.naturalWidth,
          height: img.naturalHeight,
        });
      }
    }
  }, [isOpen]);

  return (
    <>
      <div
        className={`relative cursor-pointer overflow-hidden border-2 border-[#e7e7e7] hover:border-[var(--main-blue)] rounded-xl ${className}`}
        onClick={() => setIsOpen(true)}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover rounded-xl"
        />
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center cursor-pointer p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              className="relative overflow-hidden shadow-2xl rounded-2xl bg-black"
              style={{
                width: '100%',
                maxWidth: '60vw',
                maxHeight: '90vh',
                aspectRatio: `${naturalSize.width} / ${naturalSize.height}`,
              }}
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={src}
                alt={alt}
                fill
                className="object-contain rounded-xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
