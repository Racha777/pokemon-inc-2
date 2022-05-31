import { Outlet } from "react-router-dom";
import Footer from "../../component/sections/Footer";
import Header from "../../component/sections/Header";
import usePokemons from "../../hooks/usePokemons";

const PokemonsLayout = () => {
  const applicationName = "PokemonInc";

  const credits = {
    year: new Date().getFullYear(),
    author: "Racha",
  };

  return (
    <>
      <Header applicationName={applicationName} />
      <main className="pt-16 pb-8">
        <Outlet></Outlet>
      </main>

      <Footer credits={credits} />
    </>
  );
};

export default PokemonsLayout;
