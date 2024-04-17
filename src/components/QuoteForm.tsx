import {Tabs, Tab,Textarea, Input, Link, Divider, Button, Card, CardBody, CardHeader, Autocomplete, AutocompleteItem} from "@nextui-org/react";
import {animals} from "../mock/data";
export default function QuoteForm(){
    return(
        <>
         <form className="flex flex-col gap-4">
        <h4 className="text-small text-default-400">Información general</h4>
        <Autocomplete
        isRequired
      defaultItems={animals}
      label="Cliente"
      placeholder="Buscar cliente"
      className="max-w-l"
    >
      {(animal) => <AutocompleteItem key={animal.value}>{animal.label}</AutocompleteItem>}
    </Autocomplete>
    <Autocomplete isRequired label="Tipo"
      placeholder="Tipo de cotización"
      className="max-w-l">
    <AutocompleteItem key="sanfonas"> Sanfonas</AutocompleteItem>
    <AutocompleteItem key="sillas"> Sillas</AutocompleteItem>
    <AutocompleteItem key="general"> General</AutocompleteItem>
    </Autocomplete>
    <Autocomplete isRequired label="Bus" allowsCustomValue
      placeholder="Id del Bus"
      className="max-w-l">
    <AutocompleteItem key="d234"> D234</AutocompleteItem>
    <AutocompleteItem key="d2345"> D235</AutocompleteItem>
    <AutocompleteItem key="d2343"> D243</AutocompleteItem>
  
    </Autocomplete>
    <Divider className="my-4" />
        <h4 className="text-small text-default-400">Items</h4>
        <Autocomplete isRequired label="Item"
      placeholder="Seleccione el Item"
      className="max-w-l">
    <AutocompleteItem key="sanfonas"> CAMBIO PERFIL MANTA</AutocompleteItem>
    <AutocompleteItem key="sillas"> CAMBIO LAMINA</AutocompleteItem>
    <AutocompleteItem key="general"> AJUSTE JUEGO DE MANTAS</AutocompleteItem>
    </Autocomplete>
                {/* <Input isRequired label="Email" placeholder="Enter your email" type="email" /> */}
                <Input
          type="number"
          label="Precio"
          isDisabled
          defaultValue="27228"
          startContent={
            <div className="pointer-events-none flex items-center">
              <span className="text-default-400 text-small">$</span>
            </div>
          }
        />
                <Input
          type="number"
          label="Cantidad"
          isRequired
          placeholder="Ingrese la cantidad"
         
        />
         <Textarea
      label="Nota"
      placeholder="Ingrese una nota"
      className="max-w-l"
    />
                {/* <Input
                  isRequired
                  label="Password"
                  placeholder="Enter your password"
                  type="password"
                />
                <p className="text-center text-small">
                  Need to create an account?{" "}
                  <Link size="sm" onPress={() => setSelected("sign-up")}>
                    Sign up
                  </Link>
                </p> */}
                <div className="flex gap-2 justify-end">
                  <Button fullWidth color="primary">
                    Adicionar Item
                  </Button>
                </div>
              </form>
        </>
    )
}