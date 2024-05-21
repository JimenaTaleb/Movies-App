import notfound from "../assets/notfoundv3.jpg";
import { useNavigate  } from "react-router-dom";

export default function NotFound() {

  const navigate = useNavigate();

  return (
    <div>
      <img src={notfound} alt="Page Not Found" />
      <h2>Oh dear! Floo powders did not work properly?</h2>
      <h3>Go back to the homepage.</h3>
      <button onClick={() => navigate(`/`)}>Volver</button>
    </div>
  );
}
