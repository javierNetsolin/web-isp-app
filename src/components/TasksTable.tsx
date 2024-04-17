import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Button,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from '@nextui-org/react';
import { VerticalDotsIcon } from '../icons/VerticalDots';
export default function TasksTable() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const renderCell = () => {
    return (
      <div className="relative flex justify-end items-center gap-2">
        <Dropdown>
          <DropdownTrigger>
            <Button isIconOnly size="sm" variant="light">
              <VerticalDotsIcon className="text-default-300" />
            </Button>
          </DropdownTrigger>
          <DropdownMenu>
            <DropdownItem onPress={onOpen}>Ver</DropdownItem>
            <DropdownItem>Editar</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    );
  };
  return (
    <>
      <Table
        color="success"
        disallowEmptySelection
        selectionMode="multiple"
        defaultSelectedKeys={['1', '2', '3', '4']}
        aria-label="Example static collection table"
      >
        <TableHeader>
          <TableColumn>CONCEPTO</TableColumn>
          <TableColumn>CANTIDAD</TableColumn>
          <TableColumn>UBICACIÓN</TableColumn>
          <TableColumn>NOTAS</TableColumn>
        </TableHeader>
        <TableBody>
          <TableRow key="1">
            <TableCell>CAMBIO PERFIL MANTA</TableCell>
            <TableCell>1</TableCell>
            <TableCell>Parte inferior Si m1</TableCell>
            <TableCell>{renderCell()}</TableCell>
          </TableRow>
          <TableRow key="2">
            <TableCell>CAMBIO LAMINA</TableCell>
            <TableCell>2</TableCell>
            <TableCell>Parte inferior Si y2</TableCell>
            <TableCell>{renderCell()}</TableCell>
          </TableRow>
          <TableRow key="3">
            <TableCell>AJUSTE JUEGO DE MANTAS</TableCell>
            <TableCell>4</TableCell>
            <TableCell>Parte inferior Si m1</TableCell>
            <TableCell>{renderCell()}</TableCell>
          </TableRow>
          <TableRow key="4">
            <TableCell>AJUSTE GUAYA Y TENSOR</TableCell>
            <TableCell>8</TableCell>
            <TableCell>Parte inferior Si y2</TableCell>
            <TableCell>{renderCell()}</TableCell>
            {/* <TableCell>{renderCell(item, columnKey)}</TableCell> */}
          </TableRow>
        </TableBody>
      </Table>
      <Modal isOpen={isOpen} placement={'auto'} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Nota</ModalHeader>
              <ModalBody>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Cerrar
                </Button>
                {/* <Button color="primary" onPress={onClose}>
                  Action
                </Button> */}
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
