import toast from "react-hot-toast";
import useStore from "../store/store";
import PropTypes from "prop-types";

const BookingForm = ({ usuario }) => {
  const addUser = useStore((state) => state.addUser);

  const handleClick = (e) => {
    e.preventDefault(); // Asegúrate de llamar a preventDefault()

    if (!usuario) {
      console.error("Error: usuario no definido");
      return;
    }

    addUser(usuario);
    toast.success(`Usuario guardado: ${usuario.name}`);
  };

  return (
    <form onSubmit={(e) => handleClick(e)}>
      <button type="submit">Guardar</button>
    </form>
  );
};

BookingForm.propTypes = {
  usuario: PropTypes.object.isRequired, // Asegúrate de definir el tipo de prop correcto
};

export default BookingForm;
