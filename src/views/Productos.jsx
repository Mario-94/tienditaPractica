import "../styles/products.css";

const Productos = () => {
  const renderText = () => {
    const texts = [];
    for (let i = 0; i < 10; i++) {
      texts.push(
        <div className="card card-body rouded-0 " key={i}>
          <h2>Lorem</h2>
          <img
            src="https://picsum.photos/640/360"
            className="d-block w-100"
            alt="prueba-img"
          />
          <span>Descripcion</span>
          <span>Precio</span>
        </div>
      );
    }
    return texts;
  };

  return (
    <div className="container-fluid text-center ">
      <h1>Productos</h1>
      <div className="cardContent">
        <div className="card card-body rouded-0 cardBody">
          <h2>lorem</h2>

          <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
        </div>
      </div>
      <h2>Lo mas vendido</h2>
      <section className="productsContainer">{renderText()}</section>
      <section className="container-fluid text-center mb-3">
        <span>Paginacion</span>
      </section>
    </div>
  );
};

export default Productos;
