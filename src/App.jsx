import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <title>BitBuy</title>
        <Navbar />
        <main>
          <Header />
        </main>
      </div>
    </Router>
  );
}

export default App;
