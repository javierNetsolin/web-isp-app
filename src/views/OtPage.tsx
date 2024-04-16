//import React from "react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, useDisclosure, Button,
    DropdownTrigger,  Dropdown,
    DropdownMenu,
    DropdownItem, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Tabs, Tab, 
    Textarea} from "@nextui-org/react";
    import {VerticalDotsIcon} from "../icons/VerticalDots";
import AttachedFiles from "../components/AttachedFiles";
import TasksTable from "../components/TasksTable";

//const colors = ["default", "primary", "secondary", "success", "warning", "danger"];

export default function OtPage() {
  //const [selectedColor, setSelectedColor] = React.useState("default");
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const renderCell = ()=>{
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
    }
  return (
    <div className="flex flex-col h-[90vh]">
      <div className="grow">
      <h1 className="text-large font-medium text-center mb-5">OT</h1>
      <Tabs key="solid" variant="solid" color="primary" size="lg" aria-label="Tabs variants">
          <Tab key="tasks" title="Tareas">
      <TasksTable/>
            
          </Tab>
          <Tab key="files" title="Adjuntos">
            <AttachedFiles/>
          </Tab>
          <Tab key="note" title="Notas">
          <Textarea
      label="Notas"
      placeholder="..."
      className="max-w-xs"
    />
          </Tab>
        </Tabs>

      </div>
      <div >

        <Button radius="full" className="mt-1 bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg w-full">
      Cerrar Orden
    </Button>
      </div>
    </div>
    
  );
}
