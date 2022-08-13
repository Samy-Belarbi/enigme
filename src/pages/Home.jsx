import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="start-container">
      <div className="start">
        <NavLink to="/level-1">?</NavLink>
      </div>

      <div className="bg"></div>
    </div>
  );
};

export default Home;
