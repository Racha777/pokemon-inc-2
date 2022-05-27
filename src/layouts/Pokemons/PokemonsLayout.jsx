import { Outlet } from "react-router-dom";
import Header from "../../component/sections/Header";
import usePokemons from "../../hooks/usePokemons";

const PokemonsLayout = () => {
  const context=usePokemons();
  console.log(context);
  const applicationName="PokemonInc";

  return (
    <>
      <Header
        applicationName={applicationName}
      />
      <main className="text-center pt-16 pb-8">
        <Outlet></Outlet>
      </main>
      <footer className="mt-auto text-center">Racha</footer>
    </>
  );
};

export default PokemonsLayout;
