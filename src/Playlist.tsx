import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "./store";
import "./styles.css"

interface SongProps {
  title: string;
  duration: string;
}

const Song = ({ title, duration }: SongProps) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleClick = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="song-container">
      <button onClick={handleClick} className="details-button">{title}</button>
      {showDetails && <div className="details">{`Duration: ${duration}`}</div>}
    </div>
  );
};

const Playlist = () => {
  const songs = useSelector((state: RootState) => state.playlist.songs);

  return (
    <div className="playlist">
      {songs.map((song) => (
        <Song key={song.title} title={song.title} duration={song.duration} />
      ))}
    </div>
  );
};

export default Playlist;
