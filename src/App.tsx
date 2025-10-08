import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pagine
import HomePage from "./pages/HomePage";
import CardsPage from "./pages/CardsPage";
import AddCardPage from "./pages/AddCardPage";
import ProfilePage from "./pages/ProfilePage";

// Componenti
import Navbar from "./components/Navbar";
import Dock from "./components/Dock";

import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/cards" element={<CardsPage />}></Route>
          <Route path="/addCard" element={<AddCardPage />}></Route>
          <Route path="/profile" element={<ProfilePage />}></Route>
        </Routes>
        <Dock />
      </BrowserRouter>
    </>
  );
}

export default App;
