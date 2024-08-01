import css from "./media.module.css";
import musicplayercoverimage from "../assets/images/DSC_0003-01.jpeg";
import Audioplayer from "./Audioplayer";
import AustralianTuneMP3 from "../assets/audio/Australian Tune 2024.mp3";
import RosieOfTheCrossMP3 from "../assets/audio/Rosie Of The Cross 2024.mp3";

function Media() {
  return (
    <section className={css.media}>
      <h2>Music & Video</h2>
      <div className={css.mediacontainer}>
        <div className={css.videogallery}>
          <iframe
            src="https://www.youtube.com/embed/OYg-YU_i3ik?si=C9pCsvt6FkX2IJou"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          <iframe
            src="https://www.youtube.com/embed/vfgKlaxSw_U?si=0OhMn8V239Hdqn5l"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          <iframe
            src="https://www.youtube.com/embed/SSk7wvPV860?si=ZRF5NQ34_T_mz92E"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          <iframe
            src="https://www.youtube.com/embed/bRK757dEKUM?si=HS6YHXQl1y8s1vD4"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div className={css.musicplayer}>
          <h3> Music Player </h3>
          <img
            src={musicplayercoverimage}
            className={css.musicplayercoverimage}
          ></img>
          <p>Australian Tune (original)</p>
          <Audioplayer audio={AustralianTuneMP3} />
          <p>Rosie Of The Cross (original)</p>
          <Audioplayer audio={RosieOfTheCrossMP3} />
        </div>
      </div>
    </section>
  );
}

export default Media;
