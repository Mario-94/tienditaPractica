import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import BookingForm from "./BookingForm";

// import BookingForm from "./BookingForm";

const urlPrueba = "https://jsonplaceholder.typicode.com/users";

const fetchUsuarios = async (id) => {
  try {
    const res = await fetch(`${urlPrueba}/${id}`);
    if (!res.ok) {
      throw new Error("Error al realizar la solicitud de usuarios");
    }
    return res.json();
  } catch (error) {
    console.log("Error al obtener la data", error);
    throw error;
  }
};

const HotelDetails = () => {
  const { id } = useParams();
  const {
    data: usuario,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["usuario", id],
    queryFn: () => fetchUsuarios(id),
  });

  if (isLoading) {
    return <div>Loading....</div>;
  }
  if (error) {
    return <div>Error al obtener usuarios! {error.message}</div>;
  }

  return (
    <>
      <section>
        <div className="card card-body rouded-0 text-center " key={usuario.id}>
          <h2>{usuario.name}</h2>
          <div className="mx-auto" style={{ width: "80px" }}>
            <img
              src="https://picsum.photos/640/360"
              className="d-block"
              alt="prueba-img"
              style={{ width: "80px", height: "80px" }}
            />
          </div>
          <span>{usuario.email}</span>
          <span>{usuario.username}</span>

          <BookingForm usuario={usuario} />
        </div>
      </section>
    </>
  );
};

export default HotelDetails;
