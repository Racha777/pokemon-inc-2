import { createContext, useState } from "react";

export const PokemonsContext = createContext();

export const PokemonsProvider = ({ children }) => {
  
  const [pokemon, setPokemon] = useState([]);
  const [pokemons, setPokemons] = useState([]);

  const createPokemon=async(pokemon)=>{
    console.log(pokemon);
  };

  return(
    <PokemonsContext.Provider
        value={{
            pokemons,
            setPokemons,
            createPokemon
        }}
    >
        {children}
    </PokemonsContext.Provider>
  );
};
