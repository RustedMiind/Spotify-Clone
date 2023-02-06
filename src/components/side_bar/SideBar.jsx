import "./side_bar.css";
import { NavLink } from "react-router-dom";
import {
  HouseDoor,
  Search,
  CollectionPlay,
  CollectionPlayFill,
  HouseDoorFill,
  SearchHeartFill,
  // PlusSquare,
  PlusSquareFill,
} from "react-bootstrap-icons";
import { useEffect, useState } from "react";

function SideBar(props) {
  const [playlists, setPlaylists] = useState([]);
  useEffect(() => {
    if (props.data[0]) {
      setPlaylists(props.data[2].cards);
    }
  }, [props]);
  return (
    <div className="side-bar">
      <nav className="main-buttons">
        <NavLink to="/">
          {({ isActive }) => (
            <>
              <span className="icon">
                {isActive ? <HouseDoorFill /> : <HouseDoor />}
              </span>
              <span className="title">Home</span>
            </>
          )}
        </NavLink>
        <NavLink to="/search">
          {({ isActive }) => (
            <>
              <span className="icon">
                {isActive ? <SearchHeartFill /> : <Search />}
              </span>
              <span className="title">Search</span>
            </>
          )}
        </NavLink>
        <NavLink to="/libraries">
          {({ isActive }) => (
            <>
              <span className="icon">
                {isActive ? <CollectionPlayFill /> : <CollectionPlay />}
              </span>
              <span className="title">Libraries</span>
            </>
          )}
        </NavLink>
      </nav>
      <div className="create-playlist-container main-buttons">
        <NavLink to="/create-playlist">
          {({ isActive }) => (
            <>
              <span className="icon">
                {isActive ? <PlusSquareFill /> : <PlusSquareFill />}
              </span>
              <span className="title">Create Playlist</span>
            </>
          )}
        </NavLink>
      </div>
      <div className="playlists-list">
        <ul>
          {playlists.map((playlist) => {
            return (
              <li>
                <NavLink
                  className="playlist-link"
                  to={`/playlist/${playlist.type}~(${playlist.name}~(${playlist.key}`}
                >
                  {playlist.name}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
