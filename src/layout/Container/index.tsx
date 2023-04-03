import styled from "styled-components";
import CustomScrollbars from "../../components/CustomScrollbars";
import { PADDING } from "../../config/theme";

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <ContainerStyled>
      <CustomScrollbars>{children}</CustomScrollbars>
    </ContainerStyled>
  );
};

const ContainerStyled = styled.div`
  padding: ${PADDING};
  height: calc(100% - 68px);
  flex: 1;
`;
export default Container;
