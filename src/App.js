import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./App/Pages/Home";
import Usuário from "./App/Pages/Usuário";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Usuário />} path="Usuario" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
