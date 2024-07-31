import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import WaveSurfer from "wavesurfer.js";
import css from "./audioplayer.module.css";
import { FaRegCirclePlay, FaRegCirclePause } from "react-icons/fa6";

const Audioplayer = ({ audio }) => {
  const containerRef = useRef();
  const waveSurferRef = useRef({
    isPlaying: () => false,
  });
  const [isPlaying, toggleIsPlaying] = useState(false);
  useEffect(() => {
    const waveSurfer = WaveSurfer.create({
      container: containerRef.current,
      height: 60,
      width: 300,
      waveColor: "#ca7753",
      progressColor: "#e8c030",
      cursorColor: "#b8b8b8",
      cursorWidth: 3,
      normalize: true,
      mediaControls: false,
    });
    waveSurfer.load(audio);
    waveSurfer.on("ready", () => {
      waveSurferRef.current = waveSurfer;
    });

    return () => {
      waveSurfer.destroy();
    };
  }, [audio]);

  return (
    <div className={css.audioplayer}>
      <button
        onClick={() => {
          waveSurferRef.current.playPause();
          toggleIsPlaying(waveSurferRef.current.isPlaying());
        }}
        type="button"
      >
        {isPlaying ? <FaRegCirclePause /> : <FaRegCirclePlay />}
      </button>
      <div ref={containerRef} className={css.waveformVisual} />
    </div>
  );
};

Audioplayer.propTypes = {
  audio: PropTypes.string.isRequired,
};

export default Audioplayer;
