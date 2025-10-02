export interface BentoGridItem {
  id: string;
  image: string;
  isPortrait?: boolean;
  isTextBlock?: boolean;
}

export interface BentoGridProps {
  items?: BentoGridItem[];
}