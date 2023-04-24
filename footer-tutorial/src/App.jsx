import "./App.css";
import logo from "./assets/logo.svg";

const App = () => {
  return (
    <footer className="pie-pagina">
      <div className="grupo-1">
        <div className="box">
          <figure>
            <a href="#">
              <img src={logo} alt="logo" />
            </a>
          </figure>
        </div>
        <div className="box">
          <h2>SOBRE NOSOTROS</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
            temporibus.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
            temporibus.
          </p>
        </div>
        <div className="box">
          <h2>SIGUENOS</h2>
          <div className="red-social">
            <a href="#" className="fa fa-facebook"></a>
            <a href="#" className="fa fa-instagram"></a>
            <a href="#" className="fa fa-twitter"></a>
            <a href="#" className="fa fa-youtube"></a>
          </div>
        </div>
      </div>
      <div className="grupo-2">
        <small>
          &copy; 2021 <b>Fer Pavez</b> - Todos los derechos reservados.
        </small>
      </div>
    </footer>
  );
};

export default App;
