import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../components/Home";
import { Services } from "../components/Services";
import { Header } from "../components/header/Header";
import { ServicesContent } from "../components/services/ServicesContent";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home color="blue" />} />
        <Route path="/services" element={<Services color="orange" />} />
        <Route path="/services/:id" element={<ServicesContent color="orange" />} />
      </Routes>
    </>
  );
};
