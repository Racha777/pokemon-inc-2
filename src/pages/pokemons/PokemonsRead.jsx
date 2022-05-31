import PokemonsCard from "../../component/pokemons/PokemonsCard";
import usePokemons from "../../hooks/usePokemons";
const PokemonsRead = () => {
  const { pokemons } = usePokemons();
  return (
    <section className="py-8">
      <div className="flex flex-col gap-8 container mx-auto px-8 md:px-4">
        <h2 className="text-yellow-400 text-3xl text-center font-bold">
          {pokemons.length ? `Pokemons ${pokemons.length}` : `No hay pokemones`}
        </h2>
        <div className="grid justify-items-center gap-8 md:grid-cols-3">
          {pokemons.length ? (
            pokemons.map((pokemon) => {
              return <PokemonsCard key={pokemon._id} pokemon={pokemon} />;
            })
          ) : (
            <div className="flex flex-col items-center gap-4 bg-zinc-700 rounded-lg shadow shadow-cyan-300 transition-colors w-full max-w-xs p-4 hover:shadow-yellow-400">
              <figure className="w-32 h-32">
                <img
                  src="https://i.pinimg.com/originals/3d/f6/ef/3df6eff48175fa05ec90a00415fcfe25.png"
                  alt="?"
                  className="w-full h-full object-cover"
                />
              </figure>
              <div className="flex flex-col gap-1 text-center">
                <p className="text-zinc-400 text-sm font-thin">Hp: ?</p>
                <h5 className="text-white text-xl font-medium">Nombre: ?</h5>
                <p className="text-zinc-400 text-sm font-extralight">Tipo: ?</p>
              </div>
              <div className="flex gap-1">
                <span className="bg-zinc-800 rounded-xl text-white text-sm px-3 py-1">
                  Ataque: ?
                </span>
                <span className="bg-zinc-800 rounded-xl text-white text-sm px-3 py-1">
                  Especial: ?
                </span>
              </div>
              <div className="flex gap-2">
                <button className="bg-cyan-300 rounded-md text-black font-medium px-3 py-1 transition-colors hover:bg-white">
                  ?
                </button>
                <button className="bg-rose-500 rounded-md text-white font-medium px-3 py-1 transition-colors hover:bg-rose-600">
                  ?
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PokemonsRead;
