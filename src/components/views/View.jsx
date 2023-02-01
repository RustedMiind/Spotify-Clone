import "./view.css";
import { Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import Nav from "./nav/Nav";
function View() {
  return (
    <div className="view">
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<Home></Home>} />
      </Routes>
    </div>
  );
}

export default View;
