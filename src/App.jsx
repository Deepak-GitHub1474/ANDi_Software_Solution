import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import CloudeSoftware from "./pages/CloudeSoftware";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/software" element={<CloudeSoftware />}/>
    </Routes>
  );
}

export default App;
