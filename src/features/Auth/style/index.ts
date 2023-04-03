import styled from "styled-components";
import { BACKGROUND_LOGIN } from "../../../config/theme";
import avt from "../../../assets/images/avt.jfif";
export const ContainerStyled = styled.div`
  background-color: ${BACKGROUND_LOGIN};
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const WrapperStyled = styled.div`
  background-color: white;
  padding: 6px;
  display: flex;
  width: 60%;
  height: 64vh;
  border-radius: 30px;
  overflow: hiden;
  @media (max-width: 1367px) {
    width: 90vw;
    height: 70vh;
  }
  @media (max-width: 1025px) {
    flex-direction: column;
    height: 100%;
  }
`;
export const LoginLeftStyled = styled.div`
  width: 55%;
  background-image: url(${avt});
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  @media (max-width: 1025px) {
    height: 100%;
    width: 100%;
    border-top-right-radius: 30px;
    border-bottom-left-radius: 0px;
  }
`;
export const LoginRightStyled = styled.div`
  width: 45%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  @media (max-width: 1025px) {
    width: 100%;
  }
`;

export const LoginRightFormStyled = styled.div`
  display: flex;
  flex-direction: column;
  & > h2 {
    font-size: 2.4rem;
    font-weight: 700;
    margin-bottom: 1.4rem;
  }
  & > p {
    font-size: 1.4rem;
    color: #666;
  }
  @media (max-width: 1025px) {
    width: 100%;
  }
`;
