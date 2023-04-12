import { useEffect, useState } from "react";
import "antd/dist/antd.css";
import { Button, Select } from "antd";
import styled from "styled-components";
import GlobalStyle from "./config/global.style";
import MainPage from "./features/mainPage";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";

import { SESSION_ID, getUserInfoAction } from "./features/Auth/login/AuthSlice";
import { WebSocket } from "./utils/wedSocket";
function App() {
  const dispatch: any = useDispatch();
  const cookie = Cookies.get(SESSION_ID);
  useEffect(() => {
    if (cookie) {
      dispatch(getUserInfoAction());
      WebSocket.init(cookie);
    }
    return () => {
      WebSocket.disconnect();
    };
  }, [cookie]);
  return (
    <>
      <MainPage />
      <GlobalStyle />
    </>
  );
}

export default App;
