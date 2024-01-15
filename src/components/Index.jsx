// import { Navbar } from "@material-tailwind/react";
import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import { AppRouter } from "../router/AppRouter";
import { Header } from "./header/Header";
import { Home } from "./Home";
import { Services } from "./Services";

export const Index = () => {
  return (
    <>
      <AppRouter />
    </>
  );
};
