import "./App.css";
import Header from "./Components/Header/Header";
import Detail from "./Pages/Detail/Detail";
import Home from "./Pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddProduct from "./Pages/AddProduct/AddProduct";

function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/addNewProduct" element={<AddProduct />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
