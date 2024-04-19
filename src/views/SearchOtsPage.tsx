import { Tabs, Tab } from '@nextui-org/react';
import SearchForm from '../components/SearchForm';
import SearchTable from '../components/SearchTable';
export default function SearchOtsPage() {
  return (
    <>
      <h1 className="text-large font-medium text-center mb-2">Buscar OTs</h1>
      <Tabs
        fullWidth
        key="solid"
        variant="solid"
        color="primary"
        size="lg"
        aria-label="Tabs variants"
      >
        <Tab key="tasks" title="Filtros de busqueda">
          <SearchForm />
        </Tab>
        <Tab key="files" title="OTs">
          <SearchTable />
        </Tab>
      </Tabs>
    </>
  );
}
