import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="enigme-container">
          <div className="start">
          <NavLink to="/level-1">
            Démarrer
          </NavLink>
          </div>
    </div>
  );
};

export default Home;
