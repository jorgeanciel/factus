import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingInContainer from "./containers/singIn-container";
import HomeContainer from "./containers/home-container";
import BusinessContainer from "./containers/business-container";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SingInContainer />} />
        <Route path="/home" element={<HomeContainer />} />
        <Route path="/business" element={<BusinessContainer />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
