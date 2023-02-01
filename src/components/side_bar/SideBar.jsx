import "./side_bar.css";
import { NavLink } from "react-router-dom";
import {
  HouseDoor,
  Search,
  CollectionPlay,
  CollectionPlayFill,
  HouseDoorFill,
  SearchHeartFill,
  PlusSquare,
  PlusSquareFill,
} from "react-bootstrap-icons";
import { useState } from "react";
function SideBar() {
  const [active, setActive] = useState("");
  return (
    <div className="side-bar">
      <nav className="main-buttons">
        <NavLink
          to="/"
          style={({ isActive }) => {
            if (isActive) {
              setActive("Home");
            }
            return null;
          }}
        >
          <span className={`icon `}>
            {active === "Home" ? <HouseDoorFill /> : <HouseDoor />}
          </span>
          <span className="title">Home</span>
        </NavLink>
        <NavLink
          to="/search"
          style={({ isActive }) => {
            if (isActive) {
              setActive("Search");
            }
            return null;
          }}
        >
          <span className="icon">
            {active === "Search" ? <SearchHeartFill /> : <Search />}
          </span>
          <span className="title">Search</span>
        </NavLink>
        <NavLink
          to="/libraries"
          style={({ isActive }) => {
            if (isActive) {
              setActive("Libraries");
            }
            return null;
          }}
        >
          <span className="icon">
            {active === "Libraries" ? (
              <CollectionPlayFill />
            ) : (
              <CollectionPlay />
            )}
          </span>
          <span className="title">Libraries</span>
        </NavLink>
      </nav>
      <div className="create-playlist-container main-buttons">
        <NavLink
          to="/create-playlist"
          style={({ isActive }) => {
            if (isActive) {
              setActive("CreatePlaylist");
            }
            return null;
          }}
        >
          <span className="icon">
            {active === "CreatePlaylist" ? (
              <PlusSquareFill />
            ) : (
              <PlusSquareFill />
            )}
          </span>
          <span className="title">Create Playlist</span>
        </NavLink>
      </div>
      <div className="playlists-list">
        <ul>
          <li>Hello</li>
          <li>Hello</li>
          <li>Hello</li>
          <li>Hello</li>
          <li>Hello</li>
          <li>Hello</li>
          <li>Hello</li>
          <li>Hello</li>
          <li>Hello</li>
          <li>Hello</li>
          <li>Hello</li>
          <li>Hello</li>
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
