import { useState } from "react";
import { NavLink } from "react-router-dom";
import { PlayCircleFill } from "react-bootstrap-icons";
function Category(props) {
  const { name, cards } = props.data;
  const [show, setShow] = useState(false);
  return (
    <div className="category">
      <div className="top-line">
        <h3>{name}</h3>
        <button
          onClick={() => {
            setShow(!show);
          }}
        >
          {show ? "Show Less" : "Show More"}
        </button>
      </div>
      <div
        className="playlists-list"
        style={{ height: show ? "fit-content" : null }}
      >
        {cards.map((card) => {
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
        })}
      </div>
    </div>
  );
}

export default Category;
