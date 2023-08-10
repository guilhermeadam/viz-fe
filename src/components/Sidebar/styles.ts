import styled from 'styled-components';

interface ItemProps {
  isSelected: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 256px;
  height: 100vh;

  padding: 16px;

  background: linear-gradient(180deg, rgba(0,159,227,1) 5%, rgba(203,214,30,1) 100%);
`;

export const User = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 20px;

  > a  {
    margin-left: auto;
  }
`;

export const UserAvatar = styled.img`
  width: 44px;
  height: 44px;

  border-radius: 22px;
  border: 1px solid #FFF;
`;

export const UserProfile = styled.div`
  display: flex;
  flex-direction: column;

  margin-left: 12px;

  > strong {
    color: #FFF;
  }

  > span {
    color: #FFF;
  }
`;

export const UserNotification = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #FFF;
  border-radius: 18px;

  height: 36px;
  width: 36px;
  margin-left: auto;
  position: relative;

  svg {
    width: 20px;
    height: 20px;
    color: ${({ theme }) => theme.colors.primary};
  }
`;


export const TitleSession = styled.div`
  margin: 16px 0px;
  border-radius: 4px;

  span {
    font-size: 18px;
    color: #FFF;
  }
`;

export const ItemSession = styled.div<ItemProps> `
  height: 48px;
  padding: 12px;
  border-radius: 4px;

  display: flex;
  align-items: center;

  background: ${({ theme, isSelected }) => isSelected && theme.colors.verdeCagece};
  color: ${({ theme, isSelected }) => isSelected ? '#FFF' : theme.colors.background};
  transition: 0.2s ease-in;

  svg {
    width: 20px;
    height: 20px;
  }

  span {
    font-size: 14px;
    margin-left: 12px;
  }

  .dev {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 4px;

    width: auto;
    padding: 4px 8px;

    background: ${({ theme }) => theme.colors.valencia[500]};

    border-radius: 4px;

    > strong {
      font-size: 10px;
      color: ${({ theme }) => theme.colors.valencia[900]};
    }
  }
`;
