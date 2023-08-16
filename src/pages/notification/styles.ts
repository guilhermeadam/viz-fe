import styled from 'styled-components';

interface INotificationProps {
  type: string;
}

export const NotificationCard = styled.div<INotificationProps>`
  width: 100%;
  background: ${({ theme, type }) => type === 'sucess' ? theme.colors.salad[300] : type === 'warn' ? theme.colors.gorse[300] : theme.colors.valencia[300]};

  border-radius: 4px;

  display: flex;
  align-items: center;
  padding: 16px;
  margin-bottom: 8px;

  svg {
    width: 52px;
    height: 52px;
    color: ${({ theme }) => theme.colors.salad[500]};
    rotate: 180deg;
  }

  .body {
    display: flex;
    flex-direction: column;

    margin-left: 12px;

    strong {
      font-size: 24px;
      color: ${({ theme, type }) => type === 'sucess' ? theme.colors.salad[900] : type === 'warn' ? theme.colors.gorse[900] : theme.colors.valencia[900]};
    }

    span {
      font-size: 20px;
      color: ${({ theme, type }) => type === 'sucess' ? theme.colors.salad[800] : type === 'warn' ? theme.colors.gorse[800] : theme.colors.valencia[800]};
    }

    span + span {
      margin-top: 20px;
      font-size: 16px;
      color: ${({ theme, type }) => type === 'sucess' ? theme.colors.salad[600] : type === 'warn' ? theme.colors.gorse[600] : theme.colors.valencia[600]};
    }

  }
`;