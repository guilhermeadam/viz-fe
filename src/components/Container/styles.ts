import styled from 'styled-components';

export const Wrapper = styled.div`
    height: 100vh;
    width: 100%;
    padding: 16px;
    display: flex;
    flex-direction: column;
    overflow-y: auto;

    background: ${({ theme }) => theme.colors.gray[50]};

    /* background: linear-gradient(360deg, rgba(0,159,227,1) 5%, rgba(203,214,30,1) 100%); */
`;
