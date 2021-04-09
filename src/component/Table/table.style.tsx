import styled from "styled-components";

export const Table = styled.table`
  ${(props) => props.className};
  border-collapse: collapse;
`;

export const Th = styled.th`
  border: 1px solid #999;
  padding: 0.5rem;
  text-align: left;
`;
export const Td = styled.td`
  border: 1px solid #999;
  padding: 0.5rem;
  text-align: left;
`;
