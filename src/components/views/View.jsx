import "./view.css";
import { Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import Search from "./search/Search";
import Playlist from "./playlist/Playlist";
import Nav from "./nav/Nav";
import { useState, useRef, useEffect } from "react";
function View(props) {
  const viewRef = useRef(0);
  const [opacity, setOpacity] = useState("");
  const [nav, setNav] = useState("");
  const [search, setSearch] = useState("");
  const handleNavBar = (page) => {
    switch (page) {
      case "Main":
        setNav("Main");
        break;
      case "Search":
        setNav("Search");
        break;
      case "Libraries":
        setNav("Libraries");
        break;
      case "Playlist":
        setNav("Playlist");
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    const getScroll = () => {
      const top = viewRef.current.scrollTop;
      if (top <= 500) setOpacity(top / 400);
    };
    getScroll();
    const ref = viewRef.current;
    ref.addEventListener("scroll", getScroll);
    console.log("Added");
    return () => {
      console.log("Removed");
      ref.removeEventListener("scroll", getScroll);
    };
  }, [nav]);
  return (
    <div id="view" className="view" ref={viewRef}>
      <Nav
        toggle={props.toggle}
        toggleNav={props.toggleNav}
        search={search}
        setSearch={setSearch}
        nav={nav}
        opacity={opacity}
      ></Nav>
      <Routes>
        <Route path="/" element={<Home handleNavBar={handleNavBar}></Home>} />
        <Route
          path="/search"
          element={
            <Search search={search} handleNavBar={handleNavBar}></Search>
          }
        />
        <Route path="/playlist">
          <Route
            path="*"
            element={<Playlist handleNavBar={handleNavBar} />}
          ></Route>
        </Route>

        <Route
          path="*"
          element={
            <div className="not-found">
              Error<br></br>Page Not Found
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default View;
