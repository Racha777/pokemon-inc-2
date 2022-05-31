import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { showToast } from "../utils/reactHotToast";

export const PokemonsContext = createContext();

export const PokemonsProvider = ({ children }) => {
  const navigate = useNavigate();

  const [loading, setLoading]=useState(false);
  const [pokemon, setPokemon] = useState({});
  const [pokemons, setPokemons] = useState([]);

  const createPokemon = async (pokemon) => {
    try {
      setLoading(true);
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
      showToast('😎','Pokemon creado');
      navigate("/pokemons");
    } catch (error) {
      console.log(error.response.data.message);
    } finally{
      setLoading(false);
    }
  };

  const readPokemons = async () => {
    try {
      setLoading(true);
      const options = {
        method: "GET",
        url: `${process.env.REACT_APP_POKEMON_INC_MERN_API}/pokemons`,
      };
      const { data } = await axios(options);
      setPokemons(data);
    } catch (error) {
      console.log(error.response.data.message);
    }finally{
      setLoading(false);
    }
  };

  const readPokemon = async (_id) => {
    try {
      setLoading(true);
      const options = {
        method: "GET",
        url: `${process.env.REACT_APP_POKEMON_INC_MERN_API}/pokemons/${_id}`,
      };
      const { data } = await axios(options);
      setPokemon(data);
      showToast('📕','Leido');
    } catch (error) {
      console.log(error.response.data.message);
    }finally{
      setLoading(false);
    }
  };

  const updatePokemon = async (pokemon) => {
    try {
      setLoading(true);
      const form = new FormData();
      for (const key in pokemon) {
        form.append(key, pokemon[key]);
      }
      const options = {
        method: "PUT",
        headers: {
          "Content-Type": "multipart/form-data",
        },
        data: form,
        url: `${process.env.REACT_APP_POKEMON_INC_MERN_API}/pokemons/${pokemon._id}`,
      };
      const { data } = await axios(options);
      setPokemons(pokemons.map((pokemon)=>{
        return pokemon._id===data._id? data : pokemon;
      }));
      showToast('📝', 'Actualizado');
      navigate("/pokemons");
    } catch (error) {
      console.log(error.response.data.message);
    }finally{
      setLoading(false);
    }
  };

  const deletePokemon = async (_id) => {
    try {
      setLoading(true);
      const options = {
        method: "DELETE",
        url: `${process.env.REACT_APP_POKEMON_INC_MERN_API}/pokemons/${_id}`,
      };
      const { data } = await axios(options);
      setPokemons(pokemons.filter((pokemon)=>{
        return pokemon._id!==_id;
      }));
      showToast('🗑', 'Pokemon eliminado');
    } catch (error) {
      showToast('❌',error.response.data.message);
    }finally{
      setLoading(false);
    }
  };

  // readPokemon('628b37a5355959f3112bf515');

  useEffect(() => {
    readPokemons();
  }, []);

  const submitPokemonsForm=async(pokemon)=>{
    if(pokemon._id===undefined){
      await createPokemon(pokemon);
    }else{
      await updatePokemon(pokemon);
    }
  };
  return (
    <PokemonsContext.Provider
      value={{
        loading,
        pokemon,
        pokemons,
        readPokemon,
        submitPokemonsForm,
        deletePokemon
      }}
    >
      {children}
    </PokemonsContext.Provider>
  );
};
