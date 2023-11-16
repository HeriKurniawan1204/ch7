import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Card } from "../pages/Card";

export const RoutesList = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Card />} />
      </Routes>
    </BrowserRouter>
  );
};
