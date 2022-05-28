import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const PokemonsContext = createContext();

export const PokemonsProvider = ({ children }) => {
  const navigate = useNavigate();

  const [pokemon, setPokemon] = useState({});
  const [pokemons, setPokemons] = useState([]);

  const createPokemon = async (pokemon) => {
    try {
      const form = new FormData();
      for (const key in pokemon) {
        form.append(key, pokemon[key]);
      }
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "multipart/form-data",
        },
        data: form,
        url: `${process.env.REACT_APP_POKEMON_INC_MERN_API}/pokemons`,
      };
      const { data } = await axios(options);
      setPokemons([...pokemons, data]);
      navigate("/pokemons");
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  const readPokemons = async () => {
    try {
      const options = {
        method: "GET",
        url: `${process.env.REACT_APP_POKEMON_INC_MERN_API}/pokemons`,
      };
      const { data } = await axios(options);
      setPokemons(data);
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  const readPokemon = async (_id) => {
    try {
      const options = {
        method: "GET",
        url: `${process.env.REACT_APP_POKEMON_INC_MERN_API}/pokemons/${_id}`,
      };
      const { data } = await axios(options);
      setPokemon(data);
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  // readPokemon('628b37a5355959f3112bf515');

  useEffect(() => {
    readPokemons();
  }, []);

  return (
    <PokemonsContext.Provider
      value={{
        pokemon,
        pokemons,
        readPokemon,
        setPokemons,
        createPokemon,
      }}
    >
      {children}
    </PokemonsContext.Provider>
  );
};
