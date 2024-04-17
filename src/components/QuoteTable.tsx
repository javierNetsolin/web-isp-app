import {Table, Divider, Button,TableHeader, TableColumn, TableBody, TableRow, TableCell, Textarea} from "@nextui-org/react";
import { ReactNode } from "react";
const topContent =():ReactNode=>{
    return(
        <div className="flex flex-col gap-4">

        <div className="flex justify-between items-center">

      <span className="text-default-400 text-small">Cliente: <span className="text-default-800 text-small">Consorcio Express</span> </span>
      <span className="text-default-400 text-small">Bus: <span className="text-default-800 text-small">D223</span> </span>
     
    </div>
       
        </div>
    )
}
const bottomContent =():ReactNode=>{
    return(
    <>
        <div className="flex py-2 px-2 flex-col gap-4 justify-between" >
            <Divider  className="my-4 w-full" />
      <span className="text-default-400 text-small">Subtotal: $ <span className="text-default-800 text-small"> 1.271.158 </span> </span>
      <span className="text-default-400 text-small">Iva: $ <span className="text-default-800 text-small">  241.520 </span> </span>
      <span className="text-default-400 text-small">Total: $ <span className="text-default-800 text-small">  1.512.678 </span> </span>
        <div className="flex justify-between items-center">

     
    </div>
      
        </div>
    </>
    )
}
export default function QuoteTable (){
    return(
        <>
       
        <Table  topContent={topContent()}
     bottomContent={bottomContent()}
        aria-label="Example static collection table">
      <TableHeader>
        <TableColumn>CANTIDAD</TableColumn>
        <TableColumn>DESCRIPCIÓN</TableColumn>
        <TableColumn>VALOR UNITARIO</TableColumn>
        <TableColumn>SUBTOTAL</TableColumn>
      </TableHeader>
      <TableBody>
        <TableRow key="1">
          <TableCell>1</TableCell>
          <TableCell>CAMBIO PERFIL MANTA</TableCell>
          <TableCell>27.000</TableCell>
          <TableCell>27.000</TableCell>
        </TableRow>
        <TableRow key="2">
          <TableCell>4</TableCell>
          <TableCell>AJUSTE JUEGO DE MANTAS</TableCell>
          <TableCell>27.000</TableCell>
          <TableCell>108.000</TableCell>
        </TableRow>
        <TableRow key="3">
          <TableCell>4</TableCell>
          <TableCell>AJUSTE DE PLATINAS</TableCell>
          <TableCell>27.000</TableCell>
          <TableCell>108.000</TableCell>
        </TableRow>
        <TableRow key="4">
          <TableCell>4</TableCell>
          <TableCell>CIERRE SANFONA	</TableCell>
          <TableCell>27.000</TableCell>
          <TableCell>108.000</TableCell>
        </TableRow>
      </TableBody>
    </Table>
    <Textarea
      label={<span className="text-default-800 text-medium">Observaciones </span>}
      labelPlacement="outside"
      placeholder="Ingrese sus observaciones"
      className="max-w-l mt-4"
    />
    <div className="mt-4">
                  {/* <Button fullWidth className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg" color="primary"> */}
                  <Button fullWidth className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg" >
                    Enviar cotizacion
                  </Button>
                </div>
        </>
    )
}
