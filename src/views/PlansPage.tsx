import { Divider } from '@nextui-org/react';
import { InternetIcon } from '../icons/InternetIcon';
import { TelefonoIcon } from '../icons/TelefonIcon';
import { TelevisionIcon } from '../icons/TelevisionIcon';
import { Accordion, AccordionItem } from '@nextui-org/react';
import { Button } from '@nextui-org/react';
export default function PlansPage() {
  const classesIcon = 'place-self-center fill-primary h-10 w-10';
  const defaultContent =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';
  return (
    <div className="gap-3 grid grid-cols-1 sm:grid-cols-4 max-w-1280 mx-auto px-8 py-4 text-center">
      <h4 className="text-large font-medium">Tu Plan</h4>
      <p className="text-small text-default-400">Plan basico</p>
      <div className="max-w-md">
        <div className="space-y-1">
          <p className="text-small text-default-400">
            Numero de cuenta: 3118802171
          </p>
        </div>
        <Divider className="my-4" />

        <div className=" grid grid-cols-2">
          <div className="grid">
            <h4 className="text-small ">Internet</h4>
            <InternetIcon className={classesIcon} />
          </div>
          <div className="grid">
            <div>100 MB </div>
            <h4 className="text-small text-default-400">Fibra optica</h4>
          </div>
        </div>
        <Divider className="my-4" />
        <div className=" grid grid-cols-2">
          <div className="grid">
            <h4 className="text-small ">Television</h4>
            <TelevisionIcon className={classesIcon} />
          </div>
          <div className="grid">
            <div>Canales premium </div>
            <h4 className="text-small text-default-400">+ de 150 canales</h4>
          </div>
        </div>
        <Divider className="my-4" />
        <div className=" grid grid-cols-2">
          <div className="grid">
            <h4 className="text-small ">Telefono</h4>
            <TelefonoIcon className={classesIcon} />
          </div>
          <div className="grid">
            <div>Ilimitado </div>
            <h4 className="text-small text-default-400">LLamadas nacionales</h4>
          </div>
        </div>
        <Divider className="my-4" />
        <Accordion className="p-1">
          <AccordionItem
            key="1"
            aria-label="Descripcion del plan"
            title="Descripcion del plan"
          >
            {defaultContent}
          </AccordionItem>
        </Accordion>
        <Divider className="my-4" />
        <Button
          radius="full"
          className="mt-1 bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg w-full"
        >
          Cambiar mi plan
        </Button>
      </div>
    </div>
  );
}
