import useStore from "../store/store";

const Prueba = () => {
  const usuarios = useStore((state) => state.usuarios);
  return (
    <div>
      {usuarios.map((usuario) => (
        <li key={usuario.id}>{usuario.name}</li>
      ))}{" "}
    </div>
  );
};

export default Prueba;
