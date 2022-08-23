import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Level1 from "./pages/Level1";
import Level2 from "./pages/Level2";
import Level3 from "./pages/Level3";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="level-1" exact element={<Level1 />} />
        <Route path="level-2" exact element={<Level2 />} />
        <Route path="level-3" exact element={<Level3 />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
