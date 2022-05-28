import { createContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const PokemonsContext = createContext();

export const PokemonsProvider = ({ children }) => {

  const navigate=useNavigate();
  
  const [pokemon, setPokemon] = useState([]);
  const [pokemons, setPokemons] = useState([]);

  const createPokemon=async(pokemon)=>{
    try{
      const form=new FormData();
      for(const key in pokemon){
        form.append(key, pokemon[key]);
      }
      const options={
        method:'POST',
        headers:{
          'Content-Type':'multipart/form-data'
        },
        data: form,
        url:`${process.env.REACT_APP_POKEMON_INC_MERN_API}/pokemons`
      }
      // const {data}=await axios(options);
      // setPokemons([...pokemons,data]);
      navigate('/pokemons');
    }catch(error){
      console.log(error.response.data.message);
    }
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
