import { useEffect, useState, useRef } from "react";
import { DataContext } from "../../../App";
import Category from "./category/Category";
import { NavLink } from "react-router-dom";
import "./home.css";
import { PlayCircleFill } from "react-bootstrap-icons";
function Home(props) {
  const homeRef = useRef(0);
  const [wideCards, setWideCards] = useState(null);
  const [cardsColumn, setCardsColumn] = useState(false);
  let timeout = false, // holder for timeout id
    delay = 250; // delay after event is "complete" to run callback
  useEffect(() => {
    props.handleNavBar("Main");
    handleResize();
    //   console.log(homeRef.current.scrollTop);
  }, [props]);
  useEffect(() => {
    props.setTitle("Home");
  }, []);
  const handleResize = () => {
    let cardsCount = Math.floor(homeRef.current.offsetWidth / 400);

    if (cardsCount <= 2 && !cardsColumn) {
      setCardsColumn(true);
      setWideCards(3);
    } else if (cardsCount !== wideCards && !cardsColumn) {
      setWideCards(cardsCount);
      setCardsColumn(false);
    }
    // console.log("Fires");
  };
  window.addEventListener("resize", () => {
    clearTimeout(timeout);
    // start timing for event "completion"
    timeout = setTimeout(handleResize, delay);
  });
  return (
    <DataContext.Consumer>
      {(Data) => {
        return (
          <div ref={homeRef} className="home in-view" id="home">
            <div className="ad">
              <div
                className="img"
                style={{
                  backgroundImage:
                    "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3L8j15H5Bg_eFExGitpf33eX9AlPD5jgD_g&usqp=CAU')",
                }}
              ></div>
            </div>
            <div className="top-playlists">
              <h2>Good evening</h2>
              <div className={`container ${cardsColumn ? "column" : null}`}>
                {Data[2]
                  ? Data[2].cards
                      .map((card) => {
                        return (
                          <NavLink
                            to={`/playlist/${card.type}~(${card.name}~(${card.key}`}
                            className="wide-card"
                          >
                            <div className="left">
                              <div
                                className="img"
                                style={{
                                  backgroundImage: `url(${card.img})`,
                                }}
                              ></div>
                              <div className="info">
                                <h3>{card.name}</h3>
                                <p>{card.about}</p>
                              </div>
                            </div>
                            <div className="right">
                              <PlayCircleFill className="play-btn" />
                            </div>
                          </NavLink>
                        );
                      })
                      .filter((item, index) => index < wideCards)
                  : null}
              </div>
            </div>
            {Data.map((category) => {
              return <Category data={category} key={category.key} />;
            })}
          </div>
        );
      }}
    </DataContext.Consumer>
  );
}

export default Home;
