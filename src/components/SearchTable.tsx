import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
  getKeyValue,
} from '@nextui-org/react';
import { SearchColumns, SearchRows } from '../mock/data';
export default function SearchTable() {
  return (
    <>
      <Table
        aria-label="Example table with dynamic content"
        selectionMode="single"
        //onRowAction={(key) => alert(`Opening item ${key}...`)} navegr  la ot en especifico
        onRowAction={(key) => alert(`Opening item ${key}...`)}
      >
        <TableHeader columns={SearchColumns}>
          {(column) => (
            <TableColumn key={column.key}>{column.label}</TableColumn>
          )}
        </TableHeader>
        <TableBody items={SearchRows}>
          {(item) => (
            <TableRow key={item.key}>
              {(columnKey) => (
                <TableCell>{getKeyValue(item, columnKey)}</TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </>
  );
}
