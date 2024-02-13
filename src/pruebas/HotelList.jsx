import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

const urlPrueba = "https://jsonplaceholder.typicode.com/users";
const fetchUsuarios = async () => {
  try {
    const res = await fetch(urlPrueba);
    if (!res.ok) {
      throw new Error("Error al realizar la de usuarios");
    }
    // const data = await res.json();

    // return data;
    return res.json();
  } catch (error) {
    console.log("Error al obtener la data", error);
    throw error;
  }
};

const HotelList = () => {
  const {
    data: usuarios,
    isLoading,
    error,
  } = useQuery({ queryKey: ["usuarios"], queryFn: fetchUsuarios });
  if (isLoading) {
    return <div>Loading....</div>;
  }
  if (error) {
    return <div>Error fetching Usuarios! {error.message}</div>;
  }

  return (
    <>
      <section>
        {usuarios.map((usuario) => (
          <div
            className="card card-body rouded-0 text-center "
            key={usuario.id}
          >
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
            <Link className="navBar-brand" to={`/usuario/${usuario.id}`}>
              Detalles
            </Link>
          </div>
        ))}
      </section>
    </>
  );
};

export default HotelList;
