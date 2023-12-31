import { Container, TitleContainer } from './styles';

import { handleOpenResource } from '../../utils/handleOpenResource';

interface CardProps {
  title: string;
  description: string;
  path: string;
  icon: React.ReactNode
}

export default function Card({
  title, description, path, icon
}: CardProps) {

  return (
    <Container onClick={() => handleOpenResource(title, description, path)}>
      <TitleContainer>
        {icon}
        <strong>{title}</strong>
      </TitleContainer>
      <span>{description}</span>
    </Container>
  );
}
