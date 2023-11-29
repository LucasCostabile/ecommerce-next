import { StaticImageData } from "next/image";

export interface Irepo{
  id: number;
  title: string;
  description: string;
  price: number;
  image: StaticImageData;
}