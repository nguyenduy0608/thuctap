import { Card } from "antd";
import React, { ReactNode } from "react";
import styled from "styled-components";
import { BOX_SHADOW } from "../../config/theme";

const CardComponent = ({
  title,
  extra,
  children,
}: {
  title?: string | ReactNode;
  extra?: ReactNode;
  children: ReactNode;
}) => {
  return (
    <CardStyled title={title} extra={extra}>
      {children}
    </CardStyled>
  );
};

const CardStyled = styled(Card)`
  border-radius: 0px;
  box-shadow: ${BOX_SHADOW};
  margin-bottom: 10px;
`;

export default React.memo(CardComponent);
