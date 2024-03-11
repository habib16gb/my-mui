import { useEffect, useState } from "react";
import { GridColDef, row } from "../../interfaces";
import Input from "../common/Input";
import Td from "../common/Td";
import Th from "../common/Th";
import Tr from "../common/Tr";

interface PropsDataGrid {
  rows: row[];
  colomns: GridColDef[];
}

const DataGrid = ({ rows, colomns }: PropsDataGrid) => {
  const [list, setList] = useState<row[]>([]);
  useEffect(() => {
    setList(rows);
  }, [rows]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setList(list.map((li) => {}));
  };

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    console.log(e.target.value);
  };
  console.log(list);

  return (
    <table className='table-auto'>
      <thead>
        <Tr>
          {colomns.map(({ headerName, width }, index) => (
            <Th key={index} width={width}>
              {headerName}
            </Th>
          ))}
        </Tr>
      </thead>
      <tbody>
        {list.map((row, index) => (
          <Tr key={index}>
            {colomns.map(({ field, width, editable }, index) => (
              <Td key={index}>
                <Input
                  width={width}
                  value={row[field]}
                  readonly={editable}
                  type='text'
                  onChange={handleChange}
                  onClick={handleClick}
                  id={field}
                />
              </Td>
            ))}
          </Tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataGrid;
