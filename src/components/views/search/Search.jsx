import { useEffect, useState } from "react";
import { DataContext } from "../../../App";
import { NavLink } from "react-router-dom";
import { PlayCircleFill } from "react-bootstrap-icons";
import "./search.css";

function Search(props) {
  useEffect(() => {
    props.handleNavBar("Search");
  }, []);
  useEffect(() => {
    props.setTitle("Search");
  }, []);
  return (
    <DataContext.Consumer>
      {(data) => {
        return (
          <div className="in-view home search">
            <div className="category">
              <div className="playlists-list" style={{ height: "fit-content" }}>
                {data.map((category) => {
                  return category.cards.map((card) => {
                    if (
                      card.name
                        .toLowerCase()
                        .includes(props.search.toLowerCase(), 0) ||
                      card.about
                        .toLowerCase()
                        .includes(props.search.toLowerCase(), 0)
                    ) {
                      return (
                        <div className="card" key={card.key}>
                          <NavLink
                            to={`/playlist/${card.type}~(${card.name}~(${card.key}`}
                            className="img"
                            style={{
                              backgroundImage: `url(${card.img})`,
                            }}
                          >
                            <PlayCircleFill className="play-btn" />
                          </NavLink>
                          <div className="text-area">
                            <h3 className="title">{card.name}</h3>
                            <p className="about">{card.about}</p>
                          </div>
                        </div>
                      );
                    } else return null;
                  });
                })}
              </div>
            </div>
          </div>
        );
      }}
    </DataContext.Consumer>
  );
}

export default Search;
