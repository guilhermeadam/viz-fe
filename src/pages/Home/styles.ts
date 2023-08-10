import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin: auto;

  padding: 32px;

  width: auto;
  height: auto;
  background: #FFF;
  border-radius: 8px;
  border: 4px solid ${({ theme }) => theme.colors.verdeCagece};
`;

export const UserAvatar = styled.img`
  height: 200px;
  width: 200px;
`;

export const UserProfile = styled.div`
  margin-left: 28px;
  display: flex;
  flex-direction: column;
  align-items: center;

  > strong {
    font-size: 20px;
    color: ${({ theme }) => theme.colors.azulDarkCagece};
  }
`;

export const TagName = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  border-radius: 4px;
  margin-top: 4px;
  background: ${({ theme }) => theme.colors.verdeCagece};

  > strong {
    color: ${({ theme }) => theme.colors.background}
  }
`;
