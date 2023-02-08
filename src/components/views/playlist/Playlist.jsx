import "./playlist.css";
import { useEffect, useState, useRef, useContext } from "react";
import { useLocation } from "react-router-dom";
import { CheckLg, PlayCircleFill, PlayFill } from "react-bootstrap-icons";
import { DataContext } from "../../../App";
function Playlist(props) {
  const location = useLocation();
  const myData = useContext(DataContext);
  const [dataPath, setDataPath] = useState([0, 0]);
  const [playlistFound, setPlaylistFound] = useState(false);
  useEffect(() => {}, []);
  useEffect(() => {
    props.handleNavBar("Main");
    //   console.log(homeRef.current.scrollTop);
    const url = location.pathname.split("/");
    const playlistPaths = url[url.length - 1]
      .replaceAll("%20", " ")
      .split("~(");
    const isPlaylist = url[url.length - 2] === "playlist" ? true : false;
    if (isPlaylist) {
      // console.log(playlistPaths);
      for (let i = 0; i < myData.length; i++) {
        for (let j = 0; j < myData[i].cards.length; j++) {
          if (
            myData[i].cards[j].type === playlistPaths[0] &&
            myData[i].cards[j].name === playlistPaths[1] &&
            myData[i].cards[j].key === parseInt(playlistPaths[2])
          ) {
            // console.log("Found", [i, j], myData[i].cards[j]);
            setPlaylistFound(true);
            setDataPath([i, j]);
            props.setTitle(myData[i].cards[j].name);
          }
        }
      }
      // console.log("notFound", playlistPaths);
    }
  }, [location, myData]);

  return (
    <DataContext.Consumer>
      {(Data) => {
        const playlist = Data[0] ? Data[dataPath[0]].cards[dataPath[1]] : [];
        return playlist.key && playlistFound ? (
          <div className="in-view playlist">
            <div className="headings-container">
              <div
                className="image-container"
                style={{ backgroundImage: `url(${playlist.img})` }}
              ></div>
              <div className="text-container">
                <h6>Private Playlist</h6>
                <h1>{playlist.name}</h1>
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
                {playlist.playlist.length > 0 ? (
                  playlist.playlist.map((song) => {
                    return (
                      <div className="song-card" key={song.id}>
                        <div className="rank">
                          <div className="toggle-id">{song.id}</div>
                          <PlayFill className="toggle-play" />
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
                  })
                ) : (
                  <div className="not-found"> playlist is Empty</div>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="not-found">
            Error <br /> Playlist not found
          </div>
        );
      }}
    </DataContext.Consumer>
  );
}
export default Playlist;
