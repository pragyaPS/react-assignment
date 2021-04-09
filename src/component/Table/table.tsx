import { Table as StyledTable, Th, Td } from "./table.style";
import { PARAM_NO_RECORD_FOUND } from "../../utils/constants";
import { isEmpty } from "../../utils/util";
import { ChangeEvent } from 'react';
interface ItableHeader {
  label: string,
  value: string,
  columnId: string
}
interface ItableProps {
  rows: any[],
  tableHeader: ItableHeader[],
  handleRowSelect: (event: ChangeEvent<HTMLInputElement>, row: any) => void,
  className: string
}

const Table = ({ rows, tableHeader, handleRowSelect, className }: ItableProps) => (
  <StyledTable className={className}>
    <thead>
      <tr>
        {tableHeader?.map((head) => (
          <Th key={head.columnId}>{head.label}</Th>
        ))}
      </tr>
    </thead>
    <tbody>
      {!isEmpty(rows) ? (
        rows.map((row, index) => (
          <tr key={row._id}>
            <Td>
              <input
                aria-roledescription={`checkbox-${row.name}`}
                type="checkbox"
                id={`${row.name}-${index}`}
                onChange={(event) => {
                  handleRowSelect(event, row);
                }}
                name={`${row.name}-${index}`}
              />
            </Td>
            <Td title={row._id}>{row._id}</Td>
            <Td title={row.name}>{row.name}</Td>
          </tr>
        ))
      ) : (
        <tr>
          <Td>{PARAM_NO_RECORD_FOUND}</Td>
        </tr>
      )}
    </tbody>
  </StyledTable>
);
export default Table;
