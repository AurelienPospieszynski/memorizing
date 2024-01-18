export interface Card {
  id: number;
  imageId: number;
  isVisible: boolean;
  isMatched: boolean;
  position: { x: number; y: number } | number;
  imageSrc: string;
  isFlipped: boolean;
  //animationState?: string;
}
