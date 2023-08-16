import { useState, useEffect } from 'react';

import Container from '../../components/Container';
import PageHeader from '../../components/PageHeader';

import {
  Container as ContainerHome, TagName, UserAvatar, UserProfile
} from './styles';

import avatar from '../../assets/images/avatar.svg';
import { pentaho } from '../../services/api';
import { parseCDF } from '../../utils/parseCDF';

export default function Home() {
  const [roles, setRoles] = useState<string[] | null>();

  useEffect(() => {

    (async () => {
      try {

        const response = await pentaho.get('plugin/pentaho-cdf/api/cdf-embed.js');
        const parsedResponse = await parseCDF(response.data);

        setRoles(parsedResponse.roles);

      } catch(error) {
        console.log('$Error: ', error);
      }
    }) ();

  }, []);

  return (
    <Container>
      <PageHeader
        title='Bem-vindo(a) ao SEI'
      />
      <ContainerHome>

        <UserAvatar src={avatar} />
        <UserProfile>
          {roles?.map((role) => (
            <TagName key={role}>
              <strong>{role.toUpperCase()}</strong>
            </TagName>
          ))}
        </UserProfile>
      </ContainerHome>
    </Container>
  );
}
