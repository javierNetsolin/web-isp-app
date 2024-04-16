import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Input,
  Button,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Chip,
  User,
  Selection,
  ChipProps,
  SortDescriptor
} from "@nextui-org/react";
import {PlusIcon} from "../icons/PlusIcon";
import {VerticalDotsIcon} from "../icons/VerticalDots";
import {ChevronDownIcon} from "../icons/ChevronDownIcon";
import {SearchIcon} from "../icons/SearchIcon";
import {columns, users, statusOptions} from "./data";
import {capitalize} from "../utils";

const statusColorMap: Record<string, ChipProps["color"]> = {
  active: "success",
  paused: "danger",
  vacation: "warning",
};

const INITIAL_VISIBLE_COLUMNS = ["name", "role", "status", "actions"];

type User = typeof users[0];

export default function AttachedFiles(){
    const [filterValue, setFilterValue] = React.useState("");
  const [selectedKeys, setSelectedKeys] = React.useState<Selection>(new Set([]));
  const [visibleColumns, setVisibleColumns] = React.useState<Selection>(new Set(INITIAL_VISIBLE_COLUMNS));
  const [statusFilter, setStatusFilter] = React.useState<Selection>("all");

  const [sortDescriptor, setSortDescriptor] = React.useState<SortDescriptor>({
    column: "age",
    direction: "ascending",
  });


  const hasSearchFilter = Boolean(filterValue);

  const headerColumns = React.useMemo(() => {
    if (visibleColumns === "all") return columns;

    return columns.filter((column) => Array.from(visibleColumns).includes(column.uid));
  }, [visibleColumns]);

  const filteredItems = React.useMemo(() => {
    let filteredUsers = [...users];

    if (hasSearchFilter) {
      filteredUsers = filteredUsers.filter((user) =>
        user.role.toLowerCase().includes(filterValue.toLowerCase()),
      );
    }
    if (statusFilter !== "all" && Array.from(statusFilter).length !== statusOptions.length) {
      filteredUsers = filteredUsers.filter((user) =>
        Array.from(statusFilter).includes(user.status),
      );
    }

    return filteredUsers;
  }, [users, filterValue, statusFilter]);

 

  const sortedItems = React.useMemo(() => {
    return [...filteredItems].sort((a: User, b: User) => {
      const first = a[sortDescriptor.column as keyof User] as number;
      const second = b[sortDescriptor.column as keyof User] as number;
      const cmp = first < second ? -1 : first > second ? 1 : 0;

      return sortDescriptor.direction === "descending" ? -cmp : cmp;
    });
  }, [sortDescriptor, filteredItems]);

  const renderCell = React.useCallback((user: User, columnKey: React.Key) => {
    const cellValue = user[columnKey as keyof User];

    switch (columnKey) {
      case "name":
        return (
        //   <User
        //     avatarProps={{radius: "lg", src: user.avatar}}
        //     description={user.email}
        //     name={cellValue}
        //   >
        //     {user.email}
        //   </User>
          <div className="flex flex-col">
            <p className="text-bold text-small capitalize">{cellValue}</p>
            
          </div>
        );
      case "role":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-small capitalize">{cellValue}</p>
            {/* <p className="text-bold text-tiny capitalize text-default-400">{user.team}</p> */}
          </div>
        );
      case "status":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-small capitalize text-default-400">{cellValue}</p>
            {/* <p className="text-bold text-tiny capitalize text-default-400">{user.team}</p> */}
          </div>
        //   <Chip className="capitalize" color={statusColorMap[user.status]} size="sm" variant="flat">
        //     {cellValue}
        //   </Chip>
        );
      case "actions":
        return (
          <div className="relative flex justify-end items-center gap-2">
            <Dropdown>
              <DropdownTrigger>
                <Button isIconOnly size="sm" variant="light">
                  <VerticalDotsIcon className="text-default-300" />
                </Button>
              </DropdownTrigger>
              <DropdownMenu>
                <DropdownItem>Ver</DropdownItem>
                <DropdownItem>Borrar</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

//   const onNextPage = React.useCallback(() => {
//     if (page < pages) {
//       setPage(page + 1);
//     }
//   }, [page, pages]);

//   const onPreviousPage = React.useCallback(() => {
//     if (page > 1) {
//       setPage(page - 1);
//     }
//   }, [page]);

//   const onRowsPerPageChange = React.useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
//     setRowsPerPage(Number(e.target.value));
//     setPage(1);
//   }, []);

  const onSearchChange = React.useCallback((value?: string) => {
    if (value) {
      setFilterValue(value);
     
    } else {
      setFilterValue("");
    }
  }, []);

  const onClear = React.useCallback(()=>{
    setFilterValue("")
  },[])

  const topContent = React.useMemo(() => {
    return (
      <div className="flex flex-col gap-4">
        <div className="flex justify-between gap-3 items-end">
          <Input
            isClearable
            className="w-full sm:max-w-[44%]"
            placeholder="Buscar descripción..."
            startContent={<SearchIcon />}
            value={filterValue}
            onClear={() => onClear()}
            onValueChange={onSearchChange}
          />
          <div className="flex gap-3">
            {/* <Dropdown>
              <DropdownTrigger className="hidden sm:flex">
                <Button endContent={<ChevronDownIcon className="text-small" />} variant="flat">
                  Status
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                disallowEmptySelection
                aria-label="Table Columns"
                closeOnSelect={false}
                selectedKeys={statusFilter}
                selectionMode="multiple"
                onSelectionChange={setStatusFilter}
              >
                {statusOptions.map((status) => (
                  <DropdownItem key={status.uid} className="capitalize">
                    {capitalize(status.name)}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown> */}
            {/* <Dropdown>
              <DropdownTrigger className="hidden sm:flex">
                <Button endContent={<ChevronDownIcon className="text-small" />} variant="flat">
                  Columns
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                disallowEmptySelection
                aria-label="Table Columns"
                closeOnSelect={false}
                selectedKeys={visibleColumns}
                selectionMode="multiple"
                onSelectionChange={setVisibleColumns}
              >
                {columns.map((column) => (
                  <DropdownItem key={column.uid} className="capitalize">
                    {capitalize(column.name)}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown> */}
            <Button color="primary" endContent={<PlusIcon />}>
              Adicionar
            </Button>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-default-400 text-small">Total: {users.length} Archivos</span>
         
        </div>
      </div>
    );
  }, [
    filterValue,
    statusFilter,
    visibleColumns,
    onSearchChange,
    users.length,
    hasSearchFilter,
  ]);

//   const bottomContent = React.useMemo(() => {
//     return (
//       <div className="py-2 px-2 flex justify-between items-center">
//         <span className="w-[30%] text-small text-default-400">
//           {selectedKeys === "all"
//             ? "All items selected"
//             : `${selectedKeys.size} of ${filteredItems.length} selected`}
//         </span>
//         <Pagination
//           isCompact
//           showControls
//           showShadow
//           color="primary"
//           page={page}
//           total={pages}
//           onChange={setPage}
//         />
//         <div className="hidden sm:flex w-[30%] justify-end gap-2">
//           <Button isDisabled={pages === 1} size="sm" variant="flat" onPress={onPreviousPage}>
//             Previous
//           </Button>
//           <Button isDisabled={pages === 1} size="sm" variant="flat" onPress={onNextPage}>
//             Next
//           </Button>
//         </div>
//       </div>
//     );
//   }, [selectedKeys, filteredItems.length, hasSearchFilter]);

  return (
    <Table
      aria-label="Example table with custom cells, pagination and sorting"
      isHeaderSticky
    //   bottomContent={bottomContent}
    //   bottomContentPlacement="outside"
      classNames={{
        wrapper: "max-h-[382px]",
      }}
    //   selectedKeys={selectedKeys}
    //   selectionMode="multiple"
      sortDescriptor={sortDescriptor}
      topContent={topContent}
      topContentPlacement="outside"
    //   onSelectionChange={setSelectedKeys}
      onSortChange={setSortDescriptor}
    >
      <TableHeader columns={headerColumns}>
        {(column) => (
          <TableColumn
            key={column.uid}
            align={column.uid === "actions" ? "center" : "start"}
            allowsSorting={column.sortable}
          >
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody emptyContent={"No users found"} items={sortedItems}>
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );

}