import { useState } from 'react';

import Container from '../../components/Container';
import PageHeader from '../../components/PageHeader';
import Select from '../../components/Select';
import Card from '../../components/Card';

import { FilterSection, CardContainer } from './styles';
import { FiSearch, FiBarChart2 } from 'react-icons/fi';

import { resources } from '../../mocks/resources';
import { modules } from '../../mocks/modules';

import { CODE_DASHBOARD } from '../../assets/resources/code';

export default function Dashboard() {

  const [filteredModule, setFilteredModule] = useState(0);

  const dashboardResources = resources.filter((resource) => resource.viz_rec_dsc_status_recurso === 'ativo' && resource.viz_tre_cod_tipo_recurso === CODE_DASHBOARD);

  const filteredResources = dashboardResources.filter((resource) => resource.viz_rec_cod_modulo === filteredModule);


  return (
    <Container>
      <PageHeader
        title='Dashboard'
        dev
        icon={<FiBarChart2 />}
      />
      <FilterSection>
        <Select
          value={filteredModule}
          onChange={(event) => setFilteredModule(Number(event.target.value))}
        >
          {modules.map((module) => (
            <option key={module.key} value={module.key}>
              {module.module}
            </option>
          ))}
        </Select>
        <FiSearch />
      </FilterSection>
      <CardContainer>
        {filteredResources.map((resource) => (
          <Card
            key={resource.viz_rec_cod_recurso}
            title={resource.viz_rec_dsc_nome_recurso}
            description={resource.viz_rec_dsc_recurso}
            path={resource.viz_rec_dsc_path}
            icon={<FiBarChart2 />}
          />
        ))}
      </CardContainer>
    </Container>
  );
}
