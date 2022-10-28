
import styled from "styled-components";

export const Container = styled.span`
    
    font-weight: 400;
    font-size: 12px;

    color: ${({ theme }) => theme.COLORS.WHITE_200};
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    padding: 5px 14px;

    border-radius: 8px;
    margin-right: 6px;
`;


export const Text = styled.p`
    padding-right: 100px;
    font-weight: 400;
    font-size: 16px;

    margin: 40px 0 0 104px;
    text-align: justify;

    color: ${({ theme }) => theme.COLORS.WHITE_200};    

`;



