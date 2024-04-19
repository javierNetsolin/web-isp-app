import {
  // Checkbox,
  Divider,
  Button,
  Autocomplete,
  AutocompleteItem,
  Accordion,
  AccordionItem,
  Select,
  SelectItem,
  // DatePicker,
} from '@nextui-org/react';
// import { DatePicker } from '@nextui-org/date-picker';

import { activos, empresas, searchOpts } from '../mock/data';
export default function SearchForm() {
  return (
    <>
      <form className="flex flex-col gap-4">
        {/* <h4 className="text-small text-default-400">Información general</h4> */}
        <Autocomplete
          isRequired
          defaultItems={empresas}
          label="Empresa"
          placeholder="Buscar Empresa"
          className="max-w-l mt-2"
        >
          {(empresa) => (
            <AutocompleteItem key={empresa.value}>
              {empresa.label}
            </AutocompleteItem>
          )}
        </Autocomplete>
        <Autocomplete
          isRequired
          label="Id / Serial"
          defaultItems={activos}
          placeholder="Id o serial del activo"
          className="max-w-l"
        >
          {(activo) => (
            <AutocompleteItem key={activo.value}>
              {activo.label}
            </AutocompleteItem>
          )}
        </Autocomplete>
        <Select
          label="Filtro"
          placeholder="Seleccione el filtro de la Ot"
          className="max-w-l"
          isRequired
        >
          {searchOpts.map((opt) => (
            <SelectItem key={opt.value} value={opt.value}>
              {opt.label}
            </SelectItem>
          ))}
        </Select>
        <Divider className="mt-4 " />
        <Accordion>
          <AccordionItem
            key="1"
            aria-label="Accordion 1"
            title="Filtros avanzados"
          >
            {/* <Checkbox className="mb-4" defaultSelected>
              Buscar por Producto o Servicio
            </Checkbox> */}
            <Autocomplete
              label="Producto o Servicio"
              placeholder="Buscar por Producto o Servicio"
              className="max-w-l"
            >
              <AutocompleteItem key="sanfonas">
                {' '}
                CAMBIO PERFIL MANTA
              </AutocompleteItem>
              <AutocompleteItem key="sillas"> CAMBIO LAMINA</AutocompleteItem>
              <AutocompleteItem key="general">
                {' '}
                AJUSTE JUEGO DE MANTAS
              </AutocompleteItem>
            </Autocomplete>
            {/* <DatePicker label="Birth date" className="max-w-[284px]" /> */}
          </AccordionItem>
        </Accordion>

        <div className="flex gap-2 justify-end">
          <Button fullWidth color="primary">
            Buscar OTs
          </Button>
        </div>
      </form>
    </>
  );
}
