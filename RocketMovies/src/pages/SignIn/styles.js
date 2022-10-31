import styled from 'styled-components'

export const Container = styled.div`
    height: 100vh;

    display: flex;
    align-items: stretch;

    > svg {
        width: 20px;
        height: 20px;

        color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
    }

    svg {
        width: 20px;
        height: 20px;

        color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
    }
`;

export const Form = styled.form`
    padding: 0 136px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    text-align: center;

    > h1 {
        color: ${({ theme }) => theme.COLORS.PINK};
        font-weight: 700;
        font-size: 4.8rem;
        
    }

    > p {
        color: ${({ theme }) => theme.COLORS.GRAY_100};
        font-weight: 400;
        font-size: 1.4rem;
    }

    > h2{
        color: ${({ theme }) => theme.COLORS.WHITE_100};
        font-weight: 500;
        font-size: 2.4rem;
        margin: 4.8rem 0;
    }

    > div {
        padding: 0;
    }

    > a {
        font-weight: 400;
        font-size: 1.6rem;
        color: ${({ theme }) => theme.COLORS.PINK};

        padding-left: 11.2rem;
        padding-top: 4.2rem;

    }

    > svg {
        width: 20px;
        height: 20px;

        color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
    }

    svg {
        width: 20px;
        height: 20px;

        color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
    }

    
`;

