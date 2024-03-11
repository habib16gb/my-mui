import { ReactNode } from "react";

interface PropsTr {
  children: ReactNode;
}

const Tr = ({ children }: PropsTr) => {
  return <tr className='border-1 border-red-500'>{children}</tr>;
};

export default Tr;
