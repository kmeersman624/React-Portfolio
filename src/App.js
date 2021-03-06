import React from "react";
import "./App.css";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Home from "./components/Home";
import { Container } from "react-bootstrap";
import Footer from "./components/Footer";

function App() {
  return (
    <Container fluid>
      <Header />
      <Home />
      <Projects />
      <Footer />
    </Container>
  );
}

export default App;
