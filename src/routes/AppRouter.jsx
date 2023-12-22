import { Route, Routes } from "react-router-dom";
import { Home } from "../components/Home";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} /> {/* 👈 Renders at /app/ */}
      </Routes>
    </>
  );
};
