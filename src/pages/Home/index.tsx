import Container from '../../components/Container';
import PageHeader from '../../components/PageHeader';

import {
  Container as ContainerHome, TagName, UserAvatar, UserProfile
} from './styles';

import avatar from '../../assets/images/avatar.svg';

export default function Home() {

  const user = {
    name: '215433',
    management: 'GETIC-SIS',
    roles: ['Administrator', 'GRUPO_SEI_DESENVOLVEDOR', 'GRUPO_SEI_GESTOR', 'GRUPO_SEI_GECAD_VALIDACAO', 'GRUPO_SEI_GECAD_CONSULTA', 'GRUPO_SEI_GECAD_LIBERADO']
  };

  return (
    <Container>
      <PageHeader
        title='Bem-vindo(a) ao SEI'
      />
      <ContainerHome>

        <UserAvatar src={avatar} />
        <UserProfile>
          {user.roles.map((role) => (
            <TagName key={role}>
              <strong>{role.toUpperCase()}</strong>
            </TagName>
          ))}
        </UserProfile>
      </ContainerHome>
    </Container>
  );
}
