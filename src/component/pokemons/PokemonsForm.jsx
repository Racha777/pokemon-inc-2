import * as yup from "yup";
import { Field, Form, Formik, ErrorMessage } from "formik";
import usePokemons from "../../hooks/usePokemons";

const PokemonsForm = () => {
  const { createPokemon } = usePokemons([]);
  return (
    <Formik
      initialValues={{
        name: "",
        type: "",
        hp: "",
        attack: "",
        special: "",
        image: {},
      }}
      validationSchema={yup.object({
        name: yup.string().required("el nombre es requerido"),
        type: yup.string().required("el tipo es requerido"),
        hp: yup.number().required("el Hp es requerido").positive().integer(),
        attack: yup.string().required("el ataque es requerido"),
        special: yup.string().required("el especial es requerido"),
      })}
      onSubmit={(values) => {
        createPokemon(values);
      }}
    >
      {({ handleSubmit }) => {
        return (
          <Form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 bg-zinc-700 rounded-md w-4/5 max-w-sm mx-auto p-4"
          >
            <div className="flex flex-col gap-1">
              <Field
                name="name"
                type="text"
                placeholder="Nombre"
                className="bg-zinc-800 rounded p-2"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-rose-500 text-sm text-center"
              />
            </div>
            <div className="flex flex-col gap-1">
              <Field
                name="type"
                type="text"
                placeholder="Tipo"
                className="bg-zinc-800 rounded p-2"
              />
              <ErrorMessage
                name="type"
                component="div"
                className="text-rose-500 text-sm text-center"
              />
            </div>
            <div className="flex flex-col gap-1">
              <Field
                name="hp"
                type="number"
                placeholder="Hp"
                className="bg-zinc-800 rounded p-2"
              />
              <ErrorMessage
                name="hp"
                component="div"
                className="text-rose-500 text-sm text-center"
              />
            </div>
            <div className="flex flex-col gap-1">
              <Field
                name="attack"
                type="text"
                placeholder="Ataque"
                className="bg-zinc-800 rounded p-2"
              />
              <ErrorMessage
                name="attack"
                component="div"
                className="text-rose-500 text-sm text-center"
              />
            </div>
            <div className="flex flex-col gap-1">
              <Field
                name="special"
                type="text"
                placeholder="Especial"
                className="bg-zinc-800 rounded p-2"
              />
              <ErrorMessage
                name="special"
                component="div"
                className="text-rose-500 text-sm text-center"
              />
            </div>
            <input
              type="file"
              className="bg-zinc-800 rounded p-2 text-sm cursor-pointer file:bg-white file:border-0 file:rounded file:font-semibold file:mr-2 file:p-1 file:px-2 file:cursor-pointer file:transition-colors hover:file:bg-zinc-200"
            />
            <button
              type="submit"
              className="bg-cyan-300 rounded-md text-black font-semibold p-2 transition-colors hover:bg-white"
            >
              Enviar
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default PokemonsForm;
