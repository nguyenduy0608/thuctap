import React from "react";
import { useRoutes } from "react-router-dom";
import { authRoutes } from "../config/routes";
import PageLayout from "../layout";
const MainPage = () => {
  const element = useRoutes(authRoutes);
  return element;
};

export default PageLayout(MainPage);
