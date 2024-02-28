//import TimeLapse from "/videos/timelapse.mp4";
import { useEffect } from "react";
import { useState } from "react";
import ReactPlayer from "react-player";

const TimeLapse = () => {
  const [player, setplayer] = useState(true);
  const [tempo, settempo] = useState(0);

  function reiniciar() {
    settempo(1);
  }

  return (
    <div>
      <ReactPlayer url="/videos/timelapse.mp4" playing={player} loop={true} />
      <button onClick={reiniciar}>Reiniciar</button>
    </div>
  );
};

export default TimeLapse;
