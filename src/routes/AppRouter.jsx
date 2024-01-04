import { Route, Routes } from "react-router-dom";
import { Home } from "../components/Home";
import { Services } from "../components/Services";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/services" element={<Services />} /> {/* 👈 Renders at /app/ */}
        <Route path="/" element={<Home />} /> {/* 👈 Renders at /app/ */}
        <Route path="/*" element={<Home />} /> {/* 👈 Renders at /app/ */}
      </Routes>
    </>
  );
};
