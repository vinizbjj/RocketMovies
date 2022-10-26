import styled from 'styled-components'
import { Tag } from '../../components/Tag';

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    > Section {
    width: 100%;
    max-height: 42px;

    display: flex;
    justify-content: space-between;

    align-items: center;
    }

    > Section h2{
        font-size: 3.2rem;
        font-weight: 400;      
    }
    

`;

export const Brand = styled.div`

`;
export const NewNote = styled.button`
    width: 207px;
    height: 48px;

    display: flex;
    align-items: center;

    padding-left: 32px;
    gap: 8px;


    background-color: ${({ theme }) => theme.COLORS.PINK};
    color: ${({ theme }) => theme.COLORS.BACKGROUND_600};

    border-radius: 8px;
    border-style: none;

    > svg {
        font-size: 16px;

    }

    > h3 {
        font-size: 1.6rem;
    }
    

`;
export const Content = styled.div`

> span{
        padding: 0;
    }

`;

