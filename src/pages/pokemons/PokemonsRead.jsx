import usePokemons from "../../hooks/usePokemons";
const PokemonsRead = () => {
    const {pokemons}=usePokemons();
    return (
      <section className="py-8">
        <div className="flex flex-col gap-8 container mx-auto px-8 md:px-4">
          <h2 className="text-yellow-400 text-3xl text-center font-bold">Pokemons{pokemons.length}</h2>
        </div>
      </section>
    );
  };
  
  export default PokemonsRead;
  