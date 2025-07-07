import React, { useState, useEffect, useCallback } from "react";
import { GalleryImage } from "../types";
import { CloseIcon } from "./icons/CloseIcon";

// IMPORTANT: Place your 50 gallery images in the `public/images/gallery/` directory.
// Name your images sequentially like `1.jpg`, `2.jpg`, ..., `50.jpg`.
const IMAGE_PATH = "/images/";
const IMAGE_COUNT = 50;

const galleryImages: GalleryImage[] = Array.from(
  { length: IMAGE_COUNT },
  (_, i) => {
    const imageNumber = i + 1;
    const imageUrl = `${IMAGE_PATH}${imageNumber}.jpg`;
    return {
      id: i,
      // For simplicity, we use the same image for thumbnail and full view.
      // For better performance, you could create smaller thumbnail images
      // and point thumbUrl to them (e.g., `/images/gallery/thumbs/${imageNumber}.jpg`).
      thumbUrl: imageUrl,
      fullUrl: imageUrl,
      alt: `Cohscapes project image ${imageNumber}`,
    };
  }
);

const Gallery: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );

  const handleNext = useCallback(() => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prev) => (prev! + 1) % galleryImages.length);
    }
  }, [selectedImageIndex]);

  const handlePrev = useCallback(() => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(
        (prev) => (prev! - 1 + galleryImages.length) % galleryImages.length
      );
    }
  }, [selectedImageIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (selectedImageIndex !== null) {
          setSelectedImageIndex(null); // Close lightbox first
        } else {
          onClose(); // Then close gallery
        }
      }
      if (selectedImageIndex !== null) {
        if (e.key === "ArrowRight") handleNext();
        if (e.key === "ArrowLeft") handlePrev();
      }
    };

    document.body.style.overflow = "hidden"; // Prevent background scrolling
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "auto"; // Restore scrolling on unmount
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImageIndex, onClose, handleNext, handlePrev]);

  const isLightboxOpen = selectedImageIndex !== null;
  const currentImage = isLightboxOpen
    ? galleryImages[selectedImageIndex!]
    : null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-70 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-lg shadow-2xl w-full max-w-6xl h-full max-h-[95vh] overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-4 border-b flex justify-between items-center flex-shrink-0">
          <h2 className="text-xl md:text-2xl font-bold text-secondary">
            Our Work
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-red-500 transition-colors"
            aria-label="Close gallery"
          >
            <CloseIcon />
          </button>
        </div>

        <div className="flex-grow overflow-y-auto p-4 md:p-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {galleryImages.map((image, index) => (
              <div
                key={image.id}
                onClick={() => setSelectedImageIndex(index)}
                className="cursor-pointer overflow-hidden rounded-lg group h-32 md:h-40 bg-gray-200"
                role="button"
                tabIndex={0}
                onKeyDown={(e) =>
                  e.key === "Enter" && setSelectedImageIndex(index)
                }
                aria-label={image.alt}
              >
                <img
                  src={image.thumbUrl}
                  alt={image.alt}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {isLightboxOpen && currentImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-[110] flex items-center justify-center p-4"
          onClick={() => setSelectedImageIndex(null)}
          role="dialog"
          aria-modal="true"
        >
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <img
              src={currentImage.fullUrl}
              alt={currentImage.alt}
              className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg shadow-2xl"
            />

            <button
              onClick={() => setSelectedImageIndex(null)}
              aria-label="Close image view"
              className="absolute -top-2 -right-2 md:top-2 md:right-2 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-75 transition-all"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>

            <button
              onClick={handlePrev}
              aria-label="Previous image"
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-75 transition-all text-2xl w-10 h-10 md:w-12 md:h-12 flex items-center justify-center"
            >
              ‹
            </button>

            <button
              onClick={handleNext}
              aria-label="Next image"
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-75 transition-all text-2xl w-10 h-10 md:w-12 md:h-12 flex items-center justify-center"
            >
              ›
            </button>

            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-black bg-opacity-50 text-white text-sm px-3 py-1 rounded-full">
              {selectedImageIndex! + 1} / {galleryImages.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
