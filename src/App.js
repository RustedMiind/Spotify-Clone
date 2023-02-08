import SideBar from "./components/side_bar/SideBar";
import axios from "axios";
import React, { useState, useEffect } from "react";
import View from "./components/views/View";
import "./App.css";
import { useLocation } from "react-router-dom";
export const DataContext = React.createContext();
const colors = [
  ["##00a2aa", "#389196"],
  ["#666575", "#807da8"],
  ["#f17c46", "#a30e0e"],
  ["#623aad", "#5b1ad3"],
  ["#1765da", "#034888"],
  ["#a5119e", "#6e19cf"],
  ["#4358b9", "#1937b9"],
  ["#888a11", "#708512"],
  ["#b134a6", "#d318c3"],
  ["#5c5c5c", "#808080"],
];
function App() {
  const [data, setData] = useState([]);
  const [playlist, setPlaylist] = useState("");
  const [toggleNav, setToggleNav] = useState(true);
  const location = useLocation();
  const toggle = () => {
    setToggleNav(!toggleNav);
  };
  useEffect(() => {
    const index = Math.floor(Math.random() * 10);
    document.documentElement.style.setProperty(
      "--grad-color1",
      colors[index][0]
    );
    document.documentElement.style.setProperty(
      "--grad-color2",
      colors[index][1]
    );
  }, [location]);

  useEffect(() => {
    const getData = axios.get(`/data/Data.json`);
    getData
      .then((response) => {
        setData(response.data);
        // console.log(response.data);
      })
      .catch((error) => setData(error.data));
  }, []);
  return (
    <DataContext.Provider value={data}>
      <div className="App" id="App">
        <SideBar
          toggle={toggle}
          toggleNav={toggleNav}
          data={data}
          handlePlaylist={setPlaylist}
        ></SideBar>
        <View toggle={toggle} toggleNav={toggleNav}></View>
      </div>
    </DataContext.Provider>
  );
}

export default App;
