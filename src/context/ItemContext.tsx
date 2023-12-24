import { createContext } from "react";

export type userDataType = {
  name: string;
};
export const ItemContext = createContext<userDataType | null>(null);
