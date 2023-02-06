import SideBar from "./components/side_bar/SideBar";
import axios from "axios";
import React, { useState, useEffect } from "react";
import View from "./components/views/View";
import "./App.css";
export const DataContext = React.createContext();

function App() {
  const [data, setData] = useState([]);
  const [playlist, setPlaylist] = useState("");

  useEffect(() => {
    const getData = axios.get(`/data/Data.json`);
    getData
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((error) => setData(error.data));
  }, []);
  return (
    <DataContext.Provider value={data}>
      <div className="App" id="App">
        <SideBar data={data} handlePlaylist={setPlaylist}></SideBar>
        <View></View>
      </div>
    </DataContext.Provider>
  );
}

export default App;
