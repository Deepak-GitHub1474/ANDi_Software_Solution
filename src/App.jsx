import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import CloudeSoftware from "./pages/CloudeSoftware";
import About from "./pages/About";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/software" element={<CloudeSoftware />}/>
      <Route path="/about" element={<About />}/>
    </Routes>
  );
}

export default App;
