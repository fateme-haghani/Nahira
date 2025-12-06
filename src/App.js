import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home/home";
import Services from "./components/pages/Services/Services";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/services" element={<Services></Services>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
