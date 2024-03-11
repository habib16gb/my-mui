import { ReactNode } from "react";

interface PropsTh {
  children: ReactNode;
  width: number;
}

const Th = ({ children, width }: PropsTh) => {
  return (
    <th style={{ width }} className={`px-4 py-2 border-2`}>
      {children}
    </th>
  );
};

export default Th;
