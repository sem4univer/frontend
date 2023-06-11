import { ComponentProps } from "react";

export interface LatestProps extends ComponentProps<"div"> {
  items: {
    id: number;
    title: string;
    price: number;
    image: string;
    discount?: string;
    soldout?: boolean;
  }[];
}
