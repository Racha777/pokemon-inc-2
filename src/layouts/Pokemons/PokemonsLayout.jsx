import { Outlet } from "react-router-dom";
import Header from "../../component/sections/Header";

const PokemonsLayout = () => {
  return (
    <>
      <Header/>
      <main className="text-center">
        <Outlet></Outlet>
      </main>
      <footer className="mt-auto text-center">Racha</footer>
    </>
  );
};

export default PokemonsLayout;
