import css from "./media.module.css";
import musicplayerplaceholder from "../assets/images/DSC_0003-01.jpeg";

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
          <p>Music player coming soon</p>
          <img
            src={musicplayerplaceholder}
            className={css.musicplayerimage}
          ></img>
          <ol>
            <li>Track 1</li>
            <li>Track 2</li>
            <li>Track 3</li>
          </ol>
          <hr></hr>
        </div>
      </div>
    </section>
  );
}

export default Media;
