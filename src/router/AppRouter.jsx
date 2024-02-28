import React from "react";
import { Route, Routes } from "react-router-dom";
import { ServicesContent } from "../components/services/ServicesContent";
import { Home, Services, ContacUs, AboutUs } from "../components";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home color="blue" />} />
        <Route path="/about" element={<AboutUs color="blue" />} />
        <Route path="/services" element={<Services color="orange" />} />
        <Route path="/services/:id" element={<ServicesContent color="orange" />} />
        <Route path="/contactUs" element={<ContacUs color="orange" />} />
      </Routes>
    </>
  );
};
