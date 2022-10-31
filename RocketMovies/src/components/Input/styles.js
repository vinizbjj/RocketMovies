import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    padding: 30px 64px;


    margin-bottom: 8px;
    border-radius: 10px;

    > input {
        height: 56px;
        min-width: 100%;

        padding: 12px;

        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
        color: ${({ theme }) => theme.COLORS.GRAY_300};
        border: none;

        font-size: 1.6rem;
    }

    > svg{
        height: 24px;
        width: 24px;
        overflow: auto;
    }
`;