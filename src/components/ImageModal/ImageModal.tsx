import { styled } from "@mui/material/styles";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect } from "react";

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  image: string;
  onNext?: () => void;
  onPrev?: () => void;
  currentIndex?: number;
  totalImages?: number;
}

const ModalOverlay = styled('div')<{ isOpen: boolean }>(({ isOpen }) => ({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.95)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 9999,
  opacity: isOpen ? 1 : 0,
  visibility: isOpen ? 'visible' : 'hidden',
  transition: 'opacity 0.3s ease, visibility 0.3s ease',
  padding: '2rem',
}));

const ModalContent = styled('div')<{ isOpen: boolean }>(({ isOpen }) => ({
  position: 'relative',
  maxWidth: '90vw',
  maxHeight: '90vh',
  transform: isOpen ? 'scale(1)' : 'scale(0.9)',
  transition: 'transform 0.3s ease',
  
  '& img': {
    maxWidth: '100%',
    maxHeight: '90vh',
    width: 'auto',
    height: 'auto',
    objectFit: 'contain',
    borderRadius: '8px',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
  },
}));

const CloseButton = styled('button')({
  position: 'fixed',
  top: '2rem',
  right: '2rem',
  width: '48px',
  height: '48px',
  borderRadius: '50%',
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  color: '#ffffff',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'all 0.2s ease',
  zIndex: 10000,

  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    transform: 'scale(1.1)',
  },

  '&:active': {
    transform: 'scale(0.95)',
  },
});

const NavButton = styled('button')<{ direction: 'left' | 'right' }>(({ direction }) => ({
  position: 'fixed',
  top: '50%',
  [direction]: '2rem',
  transform: 'translateY(-50%)',
  width: '48px',
  height: '48px',
  borderRadius: '50%',
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  color: '#ffffff',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'all 0.2s ease',
  zIndex: 10000,

  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    transform: 'translateY(-50%) scale(1.1)',
  },

  '&:active': {
    transform: 'translateY(-50%) scale(0.95)',
  },
}));

const ImageCounter = styled('div')({
  position: 'fixed',
  bottom: '2rem',
  left: '50%',
  transform: 'translateX(-50%)',
  padding: '0.75rem 1.5rem',
  borderRadius: '24px',
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  color: '#ffffff',
  fontSize: '0.875rem',
  fontWeight: 500,
  zIndex: 10000,
});

export const ImageModal = ({
  isOpen,
  onClose,
  image,
  onNext,
  onPrev,
  currentIndex,
  totalImages,
}: ImageModalProps) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && onNext) onNext();
      if (e.key === 'ArrowLeft' && onPrev) onPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose, onNext, onPrev]);

  if (!isOpen) return null;

  return (
    <ModalOverlay isOpen={isOpen} onClick={onClose}>
      <ModalContent isOpen={isOpen} onClick={(e) => e.stopPropagation()}>
        <img src={image} alt="Gallery image" />
      </ModalContent>

      <CloseButton onClick={onClose} aria-label="Close modal">
        <X size={24} />
      </CloseButton>

      {onPrev && (
        <NavButton 
          direction="left" 
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          aria-label="Previous image"
        >
          <ChevronLeft size={24} />
        </NavButton>
      )}

      {onNext && (
        <NavButton 
          direction="right" 
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          aria-label="Next image"
        >
          <ChevronRight size={24} />
        </NavButton>
      )}

      {currentIndex !== undefined && totalImages !== undefined && (
        <ImageCounter>
          {currentIndex + 1} / {totalImages}
        </ImageCounter>
      )}
    </ModalOverlay>
  );
};