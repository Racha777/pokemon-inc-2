import { Outlet } from "react-router-dom";
import Header from "../../component/sections/Header";
import usePokemons from "../../hooks/usePokemons";

const PokemonsLayout = () => {
  const applicationName="PokemonInc";

  return (
    <>
      <Header
        applicationName={applicationName}
      />
      <main className="pt-16 pb-8">
        <Outlet></Outlet>
      </main>
      <footer className="mt-auto text-center">Racha</footer>
    </>
  );
};

export default PokemonsLayout;
