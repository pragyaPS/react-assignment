import { useState } from "react";
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
  { label: "select", columnId: "1" },
  { label: "Id", columnId: "2" },
  { label: "country", columnId: "3" },
];

export const COUNTRY_LIST = gql`
  query getCountryList($nameIn: [String!]) {
    Country(filter: { name_in: $nameIn }) {
      _id
      name
    }
  }
`;

function App({ countryList }) {
  const { data, loading, error } = useQuery(COUNTRY_LIST, {
    variables: { nameIn: countryList },
  });
  const [selectedRows, setSelectedRows] = useState([]);
  const selectedIds = selectedRows.map((row) => row._id);

  if (loading)
    return (
      <LoaderContainer>
        <CircularProgress />
      </LoaderContainer>
    );

  if (error) return `Error! ${error.message}`;

  const handleRowSelect = (event, currentRow) => {
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
