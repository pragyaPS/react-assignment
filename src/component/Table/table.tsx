import { Table as StyledTable, Th, Td } from "./table.style";
import { PARAM_NO_RECORD_FOUND } from "../../utils/constants";
import { isEmpty } from "../../utils/util";
import { ItableProps } from "./table.interface";

const Table = (props: ItableProps) => {
  const { rows, tableHeader, handleRowSelect, className } = props;
  return (
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
                  handleRowSelect && handleRowSelect(event, row);
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
          <Td style={{textAlign: "center"}} colSpan={tableHeader?.length ?? 1}>{PARAM_NO_RECORD_FOUND}</Td>
        </tr>
      )}
    </tbody>
    </StyledTable>
  );
};
export default Table;
