import {Routes,Route} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/create" element={<h2>Create Pokemons</h2>}/>
      <Route path="/update" element={<h2>Update Pokemons</h2>}/>
      <Route path="/" element={<h2>Pokemons</h2>}/>
      <Route path="*" element={<h2>404</h2>}/>
    </Routes>
  );
}

export default App;

{/* <Routes>
      <Route path="/" element={<App />} />
      <Route path="expenses" element={<Expenses />} />
      <Route path="invoices" element={<Invoices />} />
    </Routes> */}
