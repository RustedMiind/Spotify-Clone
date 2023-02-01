import { useEffect, useState } from "react";
import axios from "axios";
import Category from "./category/Category";
import "./home.css";
import { PlayCircleFill } from "react-bootstrap-icons";
function Home() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const getData = axios.get(`/data/categories.json`);
    getData
      .then((response) => {
        setCategories(response.data);
        console.log(response.data);
      })
      .catch((error) => setCategories(error.data));
  }, []);
  return (
    <div className="home in-view">
      <div className="ad">
        <div
          className="img"
          style={{
            backgroundImage:
              "url('https://external-preview.redd.it/Jr9BRLcONjxJAmlYqdukiSWbKthrwUQevD6fwZvrlyA.jpg?auto=webp&v=enabled&s=cd94b21f1708caa26ddaa89003523a745fe099eb')",
          }}
        ></div>
      </div>
      <div className="top-playlists">
        <h2>Good evening</h2>
        <div className="container">
          <div className="wide-card">
            <div className="left">
              <div
                className="img"
                style={{
                  backgroundImage: `url(${"https://marketplace.canva.com/EAEdeiU-IeI/1/0/1600w/canva-purple-and-red-orange-tumblr-aesthetic-chill-acoustic-classical-lo-fi-playlist-cover-jGlDSM71rNM.jpg"})`,
                }}
              ></div>
              <div className="info">
                <h3>Hello</h3>
                <p>2000s-2010s Throwbacks</p>
              </div>
            </div>
            <div className="right">
              <PlayCircleFill className="play-btn" />
            </div>
          </div>
        </div>
      </div>
      {categories.map((category) => {
        return <Category data={category} />;
      })}
    </div>
  );
}

export default Home;
