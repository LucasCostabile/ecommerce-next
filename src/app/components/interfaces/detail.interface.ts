import { StaticImageData } from "next/image";

export interface Idetail{
  id?: number;
  title?: string;
  description?: string;
  price?: number;
  image?: StaticImageData;
  quantity?: number | 1;
  name?: string;
  currency?: string;
  stock?: number;
};
