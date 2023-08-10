import { Container, TitleContainer } from './styles';

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
    <Container onClick={() => console.log(path)}>
      <TitleContainer>
        {icon}
        <strong>{title}</strong>
      </TitleContainer>
      <span>{description}</span>
    </Container>
  );
}
