"use client"

import { useState } from "react";
import { BentoGridProps, BentoGridItem } from "./interface";
import { StyledBentoGridContainer, StyledBentoGridItem } from "./elements";
import { ImageModal } from "../ImageModal/ImageModal";

import image1 from "../../assets/image1.webp";
import image2 from "../../assets/image2.webp";
import image3 from "../../assets/image3.webp";
import image4 from "../../assets/image4.webp";
import image5 from "../../assets/image5.webp";
import image6 from "../../assets/image6.webp";
import image7 from "../../assets/image7.webp";
import image8 from "../../assets/image8.webp";
import image9 from "../../assets/image9.webp";

const defaultItems: BentoGridItem[] = [
  {
    id: "1",
    image: image1.src,
    isPortrait: false,
  },
  {
    id: "2",
    image: image2.src,
    isPortrait: false,
  },
  {
    id: "3",
    image: image3.src,
    isPortrait: false,
  },
  {
    id: "4",
    image: image4.src,
    isPortrait: true,
  },
  {
    id: "5",
    image: image5.src,
    isPortrait: false,
  },
  {
    id: "6",
    image: image6.src,
    isPortrait: false,
  },
  {
    id: "7",
    image: image7.src,
    isPortrait: false,
  },
  {
    id: "8",
    image: image8.src,
    isPortrait: true,
  },
  {
    id: "9",
    image: image9.src,
    isPortrait: true,
  },
];

export const ConvoiBentoGrid = ({ items = defaultItems }: BentoGridProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleImageClick = (index: number) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % items.length);
  };

  const handlePrev = () => {
    setCurrentImageIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <StyledBentoGridContainer>
        {items.map((item, index) => (
          <StyledBentoGridItem 
            key={item.id} 
            isPortrait={item.isPortrait}
            onClick={() => handleImageClick(index)}
          >
            <img src={item.image} alt={`Gallery image ${index + 1}`} />
          </StyledBentoGridItem>
        ))}
      </StyledBentoGridContainer>

      <ImageModal
        isOpen={isModalOpen}
        onClose={handleClose}
        image={items[currentImageIndex].image}
        onNext={handleNext}
        onPrev={handlePrev}
        currentIndex={currentImageIndex}
        totalImages={items.length}
      />
    </>
  );
};