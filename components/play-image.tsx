"use client";

import Image from "next/image";
import { useState, useRef, useLayoutEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  srcPreview: string;
  src: string;
  alt: string;
  className?: string;
}

export default function PlayImage({ src, srcPreview, alt, className }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [naturalSize, setNaturalSize] = useState({ width: 4, height: 3 }); // fallback aspect ratio
  const imgRef = useRef<HTMLImageElement | null>(null);

  // Load natural dimensions of full image
  useLayoutEffect(() => {
    const fullImg = new window.Image();
    fullImg.src = src;
    fullImg.onload = () => {
      setNaturalSize({
        width: fullImg.naturalWidth,
        height: fullImg.naturalHeight,
      });
    };
  }, [src]);

  return (
    <>
      {/* Preview Image */}
      <div
        className={`relative cursor-pointer overflow-hidden border-3 border-transparent hover:border-[var(--main-blue)] rounded-2xl ${className}`}
        onClick={() => setIsOpen(true)}
      >
        <img
          src={srcPreview}
          alt={alt}
          sizes="(max-width: 768px) 100vw, 25vw"
          ref={imgRef}
          className="w-full h-full object-cover fill scale-[1.07]"
        />
      </div>

      {/* Modal */}
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
                position: 'relative',
                aspectRatio: `${naturalSize.width} / ${naturalSize.height}`,
                maxWidth: '60vw',
                maxHeight: '90vh',
                width: '100%',
                minWidth: '300px',
              }}
              initial={{ y: -80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -80, opacity: 0 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()} // prevent modal close when clicking image
            >
              <Image
                src={src}
                alt={alt}
                fill
                className="object-contain rounded-xl scale-[1.05]"
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
