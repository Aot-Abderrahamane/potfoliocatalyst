import styled from 'styled-components';

export const LeftSection = styled.div`
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }
`;
export const Btn = styled.button`
  color: #fff;
  background: none;
  border: 1px solid rgba(255, 255, 255, 0.33);
  box-sizing: border-box;
  border-radius: 999px;
  padding: 16px 24px;
  font-weight: 600;
  font-size: 18px;
  line-height: 16px;
  width: fit-content;
  margin-top: 32px;
  margin-bottom: 80px;
  cursor: pointer;
  transition: 0.4s ease;
  margin-right: 10px;
  &:focus {
    outline: none;
  }

  &:hover {
    color: #0f1624;
    background: white;
    border: 1px solid #fff;
  }
  
`;

export const Paragraph =styled.p`
  font-family: 'Montserrat', sans-serif;
  line-height: 45px;
  max-width: 800px;
  font-size: 1.6rem;
  font-weight: 300;
  color: rgba(255, 255, 255,);

`
