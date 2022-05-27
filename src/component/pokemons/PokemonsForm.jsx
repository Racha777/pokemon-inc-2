import { Field, Form,Formik } from "formik";

const PokemonsForm = () => {
  return (
        <Formik 
            initialValues={{
                name:'',
                type:'',
                hp:'',
                attack:'',
                special:'',
                image:{}
            }}
            onSubmit={(values)=>{
                console.log(values);
            }}
        >
            {({handleSubmit})=>{
                return(
                    <Form
                        onSubmit={handleSubmit}
                    >
                        <Field name='name' placeholder='Nombre' className="bg-zinc-800 rounded p-2"/>
                        <Field name='type' placeholder='Tipo' className="bg-zinc-800 rounded p-2"/>
                        <Field name='hp' placeholder='Hp' className="bg-zinc-800 rounded p-2"/>
                        <Field name='attack' placeholder='Ataque' className="bg-zinc-800 rounded p-2"/>
                        <Field name='special' placeholder='Especial' className="bg-zinc-800 rounded p-2"/>
                        <button type='submit'>Enviar</button>
                    </Form>
                );
            }}
        </Formik>
  );
};

export default PokemonsForm;
