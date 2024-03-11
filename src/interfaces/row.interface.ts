import { ReactNode } from "react";

export interface row {
  id: number;
  lastName: string | null;
  firstName: string | null;
  age: number | null;
  [key: string]: ReactNode;
}
