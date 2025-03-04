export interface Card {
  type: string;
  number: string;
  holder: string | number;
  expiryDate: string | number;
  color?: string | number;
}
