import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Level1 from "./pages/Level1";
import Level2 from "./pages/Level2";

const App = () => {
  return (
    <BrowserRouter basename="/enigme">
      <Routes>
        <Route path="/enigme" exact element={<Home />} />
        <Route path="/enigme/level-1" exact element={<Level1 />} />
        <Route path="/enigme/level-2" exact element={<Level2 />} />
        <Route path="/enigme/*" exact element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;