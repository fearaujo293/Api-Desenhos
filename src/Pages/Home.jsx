import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card";
import "./Home.css";

/**
 * Página principal que lista os desenhos animados da API.
 */
const Home = () => {
  const [cartoons, setCartoons] = useState([]);

  useEffect(() => {
    axios.get("https://api.sampleapis.com/cartoons/cartoons2D")
      .then(response => setCartoons(response.data))
      .catch(error => console.error("Erro ao buscar desenhos:", error));
  }, []);

  return (
    <main className="cartoons-grid">
      {cartoons.map((cartoon, index) => (
        <Card
          key={index}
          image={cartoon.image}
          title={cartoon.title}
          genre={cartoon.genre?.[0] || "Desconhecido"}
          creator={cartoon.creator?.[0] || "Desconhecido"}
        />
      ))}
    </main>
  );
};

export default Home;
