import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import PokemonsLayout from "./layouts/Pokemons/PokemonsLayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/pokemons" replace={true}/>} />
      <Route path="/pokemons" element={<PokemonsLayout />}>
        <Route path="create" element={<h2>Create Pokemons</h2>} />
        <Route path="update" element={<h2>Update Pokemons</h2>} />
        <Route index element={<h2>Pokemons</h2>} />
      </Route>
      <Route path="*" element={<h2>404</h2>} />
    </Routes>
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
