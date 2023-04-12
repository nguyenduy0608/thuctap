import { Descriptions } from "antd";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        box-sizing:border-box;
        font-family: 'Quicksand', sans-serif !important;;
    }
    html{
        font-size:62.5% ; // 1 rem  = 12px
        height : 100%;
        max-width : 100vw;

        overflow-x : hidden;
        line-height :2 rem;
        font-weight:500;
    }
    body{
        font-size:1.4rem
    }
    
`;
export const TitleCard = styled.h3`
  text-transform: uppercase;
  font-weight: 600;
  font-size: 16px;
`;
export const TitleAccount = styled.text`
  font-size: 1.8rem;
  padding-left: 2.5%;
`;
export const StyledDescriptions = styled(Descriptions)`
  padding: 0 5% 0 5%;
  .ant-descriptions-item {
    font-weight: 600;
  }
  .ant-descriptions-item-label {
    font-size: 1.4rem;
  }
`;
export default GlobalStyle;
