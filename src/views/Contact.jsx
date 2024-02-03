import "../styles/contact.css";

const Contact = () => {
  return (
    <div className="container-fluid">
      <h1 className="text-center">Contact</h1>
      <div className="cardContent">
        <form className="row g-3 cardBody rouded-0   p-3">
          <div className="col imageContact">
            <img
              src="https://picsum.photos/640/360"
              className="d-block w-100 "
              alt="prueba-img"
            />
          </div>
          <section className="col">
            <div className="col mb-2">
              <label htmlFor="inputEmail4" className="form-label">
                Correo
              </label>
              <input type="email" className="form-control" id="inputEmail4" />
            </div>
            <div className="col mb-2">
              <label htmlFor="inputPassword4" className="form-label">
                Nombre(s)
              </label>
              <input type="text" className="form-control" id="inputPassword4" />
            </div>
            <div className="col mb-2">
              <label htmlFor="inputPassword4" className="form-label">
                Apellidos
              </label>
              <input type="text" className="form-control" id="inputPassword4" />
            </div>
            <div className="col-12 mb-2">
              <label htmlFor="inputAddress" className="form-label">
                Address
              </label>
              <input
                type="text"
                className="form-control"
                id="inputAddress"
                placeholder="1234 Main St"
              />
            </div>
            <div className="col-12 mb-2">
              <label htmlFor="inputAddress2" className="form-label">
                Address 2
              </label>
              <input
                type="text"
                className="form-control"
                id="inputAddress2"
                placeholder="Apartment, studio, or floor"
              />
            </div>
            <div className="row mb-2">
              <div className="col-md-6">
                <label htmlFor="inputZip" className="form-label">
                  Codigo postal
                </label>
                <input type="text" className="form-control" id="inputZip" />
              </div>
              <div className="col-md-6">
                <label htmlFor="inputCity" className="form-label">
                  Ciudad
                </label>
                <input type="text" className="form-control" id="inputCity" />
              </div>
            </div>

            <div className="col">
              <label htmlFor="inputState" className="form-label">
                Estado
              </label>
              <select id="inputState" className="form-select">
                <option selected>Choose...</option>
                <option>...</option>
              </select>
            </div>
          </section>

          <div className="row g-3">
            <div className="  text-center">
              <button
                type="submit"
                className="btn  btn-outline-light containerButton"
              >
                Enviar
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
