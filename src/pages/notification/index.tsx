import Container from '../../components/Container';
import PageHeader from '../../components/PageHeader';

import { FiBell } from 'react-icons/fi';
import {
  FcLowPriority,
  FcMediumPriority,
  FcHighPriority,
} from 'react-icons/fc';
import { NotificationCard  } from './styles';


export default function Notification() {

  const notifications = [
    {
      id: 1,
      title: 'SEI Módulo 03 - CADASTRO',
      description: 'Competência 2023/7 liberada em 01/08/2023  03:29 com prazo de 5 dias úteis para concluir validação...',
      isActive: true,
      type: 'sucess'
    },
    {
      id: 2,
      title: 'SEI Módulo 03 - CADASTRO',
      description: 'Competência 2023/7 liberada em 01/08/2023  03:29 com prazo de 5 dias úteis para concluir validação...',
      isActive: true,
      type: 'warn'
    },
    {
      id: 3,
      title: 'SEI Módulo 03 - CADASTRO',
      description: 'Competência 2023/7 liberada em 01/08/2023  03:29 com prazo de 5 dias úteis para concluir validação...',
      isActive: true,
      type: 'danger'
    },
    
  ];

  return (
    <Container>
      <PageHeader
        title = 'Notificações'
        dev
        icon={<FiBell />}
      />
      <>
        {notifications.filter((active) => active.isActive).map((notification) => (
          <NotificationCard type={notification.type} key={notification.id}>
            {notification.type === 'sucess' && <FcLowPriority />}
            {notification.type === 'warn' && <FcMediumPriority />}
            {notification.type === 'danger' && <FcHighPriority />}
            <div className="body">
              <strong>{notification.title}</strong>
              <span>{notification.description}</span>
              <span>Expira em: 20/08/2023 14:00 </span>
            </div>
          </NotificationCard>
        ))}
      </>
    </Container>
  );
}