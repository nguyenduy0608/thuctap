import { useState } from "react";
import "antd/dist/antd.css";
import { Button, Select } from "antd";
import styled from "styled-components";
import GlobalStyle from "./config/global.style";
import MainPage from "./features/mainPage";
function App() {
  return (
    <>
      <MainPage />
      <GlobalStyle />
    </>
  );
}

export default App;
