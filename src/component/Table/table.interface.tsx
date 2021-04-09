import { ChangeEvent } from "react";
export interface ItableHeader {
  label: string;
  value: string;
  columnId: string;
}
export interface ItableProps {
  rows: any[];
  tableHeader?: ItableHeader[];
  handleRowSelect?: (event: ChangeEvent<HTMLInputElement>, row: any) => void;
  className?: string;
}
