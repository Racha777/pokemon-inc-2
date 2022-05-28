import { Routes, Route, Navigate } from "react-router-dom";
import { PokemonsProvider } from "./context/PokemonsContext";
import { Toaster } from "react-hot-toast";
import "./App.css";
import PokemonsLayout from "./layouts/Pokemons/PokemonsLayout";
import PokemonsCreate from "./pages/pokemons/PokemonsCreate";
import PokemonsRead from "./pages/pokemons/PokemonsRead";
import PokemonsUpdate from "./pages/pokemons/PokemonsUpdate";

function App() {
  return (
    <PokemonsProvider>
      <Toaster />
      <Routes>
        <Route path="/" element={<Navigate to="/pokemons" replace={true} />} />
        <Route path="/pokemons" element={<PokemonsLayout />}>
          <Route path="create" element={<PokemonsCreate />} />
          <Route path=":id" element={<PokemonsUpdate />} />
          <Route index element={<PokemonsRead />} />
        </Route>
        <Route path="*" element={<h2>404</h2>} />
      </Routes>
    </PokemonsProvider>
  );
}

export default App;

{
  /* <Routes>
      <Route path="/" element={<App />} />
      <Route path="expenses" element={<Expenses />} />
      <Route path="invoices" element={<Invoices />} />
    </Routes> */
}
