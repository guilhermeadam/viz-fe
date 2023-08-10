import { Header } from './styles';

interface PageHeaderProps {
  title: string;
  dev?: boolean;
  icon?: React.ReactNode
}

export default function PageHeader({
  icon,
  title,
  dev = true,
}: PageHeaderProps) {
  return (
    <Header>
      {icon}
      <strong>{title}</strong>
      {dev && (
        <div className="dev">
          <strong>DEV</strong>
        </div>
      )}
    </Header>
  );
}
