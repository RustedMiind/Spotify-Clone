import { useEffect } from "react";
import userImage from "./HQwHI.jpg";
import "./nav.css";
import {
  ArrowLeftCircleFill,
  ArrowRightCircleFill,
  Search,
  ArrowBarRight,
} from "react-bootstrap-icons";
function Nav(props) {
  useEffect(() => {
    props.setSearch("");
  }, [props.nav]);
  return (
    <nav className="top-nav">
      <div className="background-nav" style={{ opacity: props.opacity }}>
        <div className="background-darkness"></div>
      </div>
      <div className="left">
        <div
          onClick={props.toggle}
          className={`arrow-menu ${props.toggleNav ? null : "hidden"}`}
        >
          <ArrowBarRight />
        </div>
        <div className="arrow">
          <ArrowLeftCircleFill />
        </div>
        <div className="arrow">
          <ArrowRightCircleFill />
        </div>
        {props.nav === "Search" ? (
          <div className="search-bar">
            <div className="icon-container">
              <Search className="icon" />
            </div>
            <input
              type="text"
              value={props.search}
              onChange={(event) => {
                props.setSearch(event.target.value);
              }}
              placeholder="What do you want to listen to?"
            />
          </div>
        ) : null}
      </div>
      <div className="right">
        {props.nav === "Main" ? (
          <button className="upgrade">Upgrade</button>
        ) : null}
        <button className="user-settings">
          <img src={userImage} alt="" />
          <div className="name">Ali Soliman</div>
        </button>
      </div>
    </nav>
  );
}

export default Nav;
