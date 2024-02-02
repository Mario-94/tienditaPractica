import "../styles/card.css";
import Carrusel from "../components/Carrusel";

const Home = () => {
  return (
    <div className="container-fluid text-center ">
      <h1>Home</h1>
      <Carrusel />
      <div className="cardContent">
        <div className="card card-body rouded-0 cardBody">
          <h2>Text</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est
            sapiente similique repudiandae eligendi corporis animi molestiae
            commodi optio a voluptatem labore, voluptate exercitationem, tenetur
            soluta quos aperiam doloremque facilis. Dolore.
          </p>
        </div>
      </div>
      <div className="cardContent">
        <div className="card card-body rouded-0 cardBody">
          <h2>Text</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est
            sapiente similique repudiandae eligendi corporis animi molestiae
            commodi optio a voluptatem labore, voluptate exercitationem, tenetur
            soluta quos aperiam doloremque facilis. Dolore.
          </p>
        </div>
      </div>
      <div className="cardContent">
        <div className="card card-body rouded-0 cardBody">
          <h2>Text</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est
            sapiente similique repudiandae eligendi corporis animi molestiae
            commodi optio a voluptatem labore, voluptate exercitationem, tenetur
            soluta quos aperiam doloremque facilis. Dolore.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
