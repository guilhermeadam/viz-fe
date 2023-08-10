import {
  Wrapper
} from './styles';

interface ContainerProps {
  children: React.ReactNode;
}

export default function Container({ children }: ContainerProps) {
  return (
    <Wrapper>
      { children }
    </Wrapper>
  );
}
