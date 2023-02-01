import "./nav.css";
import {
  ArrowLeftCircleFill,
  ArrowRightCircleFill,
} from "react-bootstrap-icons";
function Nav() {
  return (
    <nav className="top-nav">
      <div className="left">
        <div className="arrow">
          <ArrowLeftCircleFill />
        </div>
        <div className="arrow">
          <ArrowRightCircleFill />
        </div>
      </div>
      <div className="right">
        <button className="upgrade">Upgrade</button>
        <button className="user-settings">
          <img
            src="https://miro.medium.com/max/720/1*_ARzR7F_fff_KI14yMKBzw.png"
            alt=""
          />
          <div className="name">Ali Soliman</div>
        </button>
      </div>
    </nav>
  );
}

export default Nav;
