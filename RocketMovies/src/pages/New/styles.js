import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas:
    "header"
    "content";
    
`;

export const Form = styled.form`
  max-width: 100%;
  margin: 38px auto;

  > header h1 {
    font-weight: 500;
    font-size: 3.6rem;
    color: ${({ theme }) => theme.COLORS.WHITE_200};

    
    margin: 24px 104px;
  }

  > header {
    display: flex;
    flex-direction: column;

  }

  > div {
    display: flex;
    margin-left: 35px;
  }

  > span {
    margin-left: 104px;
    font-weight: 400;
    font-size: 2.0rem;
    color: ${({ theme }) => theme.COLORS.GRAY_200};

  }
`;

export const TextArea = styled.textarea`
  width: 91%;
  height: 274px;  
  
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};;
  color: ${({ theme }) => theme.COLORS.WHITE_200};
  
  border: none;
  border-radius: 10px;
  resize: none;
  

  margin: 24px 104px 40px 104px;
  font-size: 1.6rem;
  padding-right: 20px;


  &::placeholder{
    color: ${({ theme }) => theme.COLORS.GRAY_300};
    padding: 8px;
    
  }
`;