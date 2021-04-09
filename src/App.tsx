import { useState, ChangeEvent } from "react";
import { useQuery, gql } from "@apollo/client";
import Table from "./component/Table/table";
import CircularProgress from "@material-ui/core/CircularProgress";
import {
  Container,
  table,
  Pre,
  SelecteIds,
  LoaderContainer,
} from "./App-style";

const tableHeader = [
  { label: "select", value: "", columnId: "1"},
  { label: "Id", value: "_id" , columnId: "2"},
  { label: "country", value: "name", columnId: "3" },
];
type Country = {
  name: string
_id: string
}

export const COUNTRY_LIST = gql`
  query getCountryList($count: Int) {
    Country(first: $count ) {
      _id
      name
    }
  }
`;

function App({ countryList }: any) {
  const { data, loading, error } = useQuery(COUNTRY_LIST, {
    variables: { count: 4 },
  });
  const [selectedRows, setSelectedRows] = useState<Country[] >([]);
  const selectedIds = selectedRows.map((row) => row._id);

  if (loading)
    return (
      <LoaderContainer>
        <CircularProgress />
      </LoaderContainer>
    );

  if (error) return `Error! ${error.message}`;

  const handleRowSelect = (event:ChangeEvent<HTMLInputElement>, currentRow: Country) => {
    let isRowChecked = event.target.checked;
    if (isRowChecked) {
      setSelectedRows([...selectedRows, currentRow]);
    } else {
      let filterSelectedRow = selectedRows.filter(
        (row) => row._id !== currentRow._id
      );
      setSelectedRows(filterSelectedRow);
    }
  };

  return (
    <Container>
      <Table
        className={table}
        tableHeader={tableHeader}
        rows={data.Country}
        handleRowSelect={handleRowSelect}
      />

      <SelecteIds>
        <label>Selected Ids: </label>
        <Pre>{JSON.stringify(selectedIds)}</Pre>
      </SelecteIds>
    </Container>
  );
}

export default App;
