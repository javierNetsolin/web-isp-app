//import React from "react";
import { Tabs, Tab } from '@nextui-org/react';
import QuoteForm from '../components/QuoteForm';
import QuoteTable from '../components/QuoteTable';

export default function QuotePage() {
  // const [selected, setSelected] = React.useState<string | number>("login");
  return (
    <div className="gap-3 grid grid-cols-1  max-w-1280 mx-auto px-8 py-4">
      <h1 className="text-large font-medium text-center">Nueva Cotización</h1>
      <Tabs
        fullWidth
        key="solid"
        variant="solid"
        color="primary"
        size="lg"
        aria-label="Tabs variants"
      >
        <Tab key="tasks" title="Agregar Items">
          <QuoteForm />
        </Tab>
        <Tab key="files" title="Cotizacion">
          <QuoteTable />
        </Tab>
      </Tabs>
    </div>
  );
}
