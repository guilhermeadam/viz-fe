import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  align-items: center;

  height: 56px;
  margin-bottom: 56px;
  width: 100%;

  svg {
    width: 28px;
    height: 28px;
    color: ${({ theme }) => theme.colors.azulDarkCagece};
  }

  > strong {
    color: ${({ theme }) => theme.colors.azulDarkCagece};
    font-size: 36px;
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
      font-size: 14px;
      color: ${({ theme }) => theme.colors.valencia[900]};
    }
  }
`;
