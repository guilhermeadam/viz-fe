import { Container } from './styles';

export default function Layout({children} : {children: React.ReactNode}) {
  return (
    <Container>
      {children}
    </Container>
  );
}
