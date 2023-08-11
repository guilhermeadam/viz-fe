import { CardContainer } from './styles';

import Container from '../../components/Container';
import PageHeader from '../../components/PageHeader';
import Card from '../../components/Card';

import { FiSun } from 'react-icons/fi';

import { resources } from '../../mocks/resources';

import { CODE_DOCUMENTATION } from '../../assets/resources/code';

export default function Documentation() {

  const documentationResources = resources.filter((resource) => resource.viz_rec_dsc_status_recurso === 'ativo' && resource.viz_tre_cod_tipo_recurso === CODE_DOCUMENTATION);

  return (
    <Container>
      <PageHeader
        title='Documentation'
        dev
        icon={<FiSun />}
      />
      <CardContainer>
        {documentationResources.map((resource) => (
          <Card
            key={resource.viz_rec_cod_recurso}
            title={resource.viz_rec_dsc_nome_recurso}
            description={resource.viz_rec_dsc_recurso}
            path={resource.viz_rec_dsc_path}
            icon={<FiSun />}
          />
        ))}
      </CardContainer>
    </Container>
  );
}
