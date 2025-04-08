import React from "react";
import Header from "./components/Header";
import Home from "./Pages/Home.jsx";
import "./index.css";

/**
 * Componente principal da aplicação.
 */
export default function App() {
  return (
    <div>
      <Header />
      <Home />
    </div>
  );
}