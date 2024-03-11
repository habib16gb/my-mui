import { ReactNode } from "react";

interface PropsTd {
  children: ReactNode;
}

const Td = ({ children }: PropsTd) => {
  return <td className=' border-2'>{children}</td>;
};

export default Td;
