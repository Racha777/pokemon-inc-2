import { Link } from "react-router-dom";
import {toast} from "react-hot-toast";
import usePokemons from "../../hooks/usePokemons";

const PokemonsCard = ({ pokemon }) => {
  const { _id, name, type, hp, attack, special, image } = pokemon;
  const {deletePokemon}=usePokemons();

  const handleDelete = (_id) => {
    toast((t) =>
    (
      <div className="flex flex-col gap-2">
        <h5 className="text-lg font-medium text-center">¿Deseas eliminarlo?</h5>
        <div className="flex gap-2">
          <button
            className="bg-rose-500 rounded-md text-white font-medium px-3 py-1 cursor-pointer transition-colors hover:bg-rose-600"
            onClick={() => {
              deletePokemon(_id);
              toast.dismiss(t.id);
            }}
          >
            Eliminar
          </button>
          <button
            onClick={() => toast.dismiss(t.id)}
            className="bg-cyan-300 rounded-md text-black font-medium px-3 py-1 cursor-pointer transition-colors hover:bg-white"
          >
            Cancelar
          </button>
        </div>
      </div>
    ),
      {
        icon: '❗❕❗',
        style: {
          borderRadius: '1rem',
          backgroundColor: '#20232a',
          color: '#fff',
          boxShadow: '0 0 0 0.125rem #8888, 0 0 0 0.25rem #8888'
        },
      }
    );
  };

  return (
    <div className="flex flex-col items-center gap-4 bg-zinc-700 rounded-lg shadow shadow-cyan-300 transition-colors w-full max-w-xs hover:shadow-yellow-400 p-4">
      <figure className="w-32 h-32">
        <img
          src={image.url}
          alt={name}
          className="w-full h-full object-cover"
        />
      </figure>
      <div className="flex flex-col gap-1">
        <p className="text-zinc-400 text-sm font-thin">Hp: {hp}</p>
        <h5 className="text-white text-xl font-medium">{name}</h5>
        <p className="text-zinc-400 text-sm font-extralight">{type}</p>
      </div>
      <div className="flex gap-1">
        <span className="bg-zinc-800 rounded-xl text-white text-sm px-3 py-1">
          {attack}
        </span>
        <span className="bg-zinc-800 rounded-xl text-white text-sm px-3 py-1">
          {special}
        </span>
      </div>
      <div className="flex gap-2">
        <Link
          to={`${_id}`}
          className="bg-cyan-300 rounded-md text-black font-medium px-3 py-1 transition-colors hover:bg-white"
        >
          Editar
        </Link>
        <button
          className="bg-rose-500 rounded-md text-white font-medium px-3 py-1 transition-colors hover:bg-rose-600"
          onClick={()=>handleDelete(_id)}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default PokemonsCard;
