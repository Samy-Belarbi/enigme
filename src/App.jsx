import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Level1 from "./pages/Level1";
import Level2 from "./pages/Level2";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/level-1" element={<Level1 />} />
        <Route path="/level-2" element={<Level2 />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;