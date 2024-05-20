import notfound from "../assets/notfoundv3.jpg";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <img src={notfound} alt="Page Not Found" />
      <h2>Oh dear! Floo powders did not work properly?</h2>
      <h3>Go back to the homepage.</h3>
      <Link to={`/`} style={{ textDecoration: "none" }}>
        <button>Volver</button>
      </Link>
    </div>
  );
}
