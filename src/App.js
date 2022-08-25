import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./App/Pages/Home";
import TodoList from "./App/Pages/TodoList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<TodoList />} path="/todo-list/:userId" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
