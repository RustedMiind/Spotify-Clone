import "./playlist.css";
import { useEffect, useState, useRef } from "react";
import { PlayCircleFill } from "react-bootstrap-icons";
import { DataContext } from "../../../App";
function Playlist(props) {
  useEffect(() => {
    props.handleNavBar("Main");
    //   console.log(homeRef.current.scrollTop);
  }, [props]);
  return (
    <DataContext.Consumer>
      {(Data) => {
        return Data[2] ? (
          <div className="in-view playlist">
            <div className="headings-container">
              <div
                className="image-container"
                style={{ backgroundImage: `url(${Data[2].cards[0].img})` }}
              ></div>
              <div className="text-container">
                <h6>Private Playlist</h6>
                <h1>{Data[2].cards[0].name}</h1>
                <h6>Ali Soliman - 20 Songs</h6>
              </div>
            </div>
            <div className="songs-container">
              <div className="songs">
                <div className="nav">
                  <div className="nav-container">
                    <div className="play-btn2">
                      <PlayCircleFill />
                    </div>
                  </div>
                  <div className="song-card headers">
                    <div className="rank">
                      <div>#</div>
                    </div>
                    <div className="image-container">Title</div>
                    <div className="info">
                      <h3></h3>
                      <p></p>
                    </div>
                    <div className="album">Album</div>
                    <div className="date-added">Date added</div>
                    <div className="duration">Duration</div>
                  </div>
                </div>
                {Data[2].cards[4].playlist.map((song) => {
                  return (
                    <div className="song-card" key={song.id}>
                      <div className="rank">
                        <div>{song.id}</div>
                      </div>
                      <div className="image-container">
                        <div
                          className="image"
                          style={{ backgroundImage: `url(${song.img})` }}
                        ></div>
                      </div>
                      <div className="info">
                        <h3>{song.title}</h3>
                        <p>{song.by}</p>
                      </div>
                      <div className="album">{song.albums}</div>
                      <div className="date-added">{"Dec 31, 1999"}</div>
                      <div className="duration">{song.duration}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ) : null;
      }}
    </DataContext.Consumer>
  );
}
export default Playlist;
