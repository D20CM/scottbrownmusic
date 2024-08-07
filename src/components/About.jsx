import circuslivephoto from "../assets/images/circuslivephoto.jpg";
import css from "./about.module.css";

function About() {
  return (
    <div className={css.aboutpagecontainer}>
      <div className={css.aboutcontent}>
        <h2>About</h2>
        <p>
          Scott Brown is a Welsh musician who is currently based in Liverpool.
          He is influenced as much by his background and early musical
          experiences playing trombone in his local brass band as his favorite
          musicians. These include folk musicians such as Bert Jansch and John
          Renbourn, jazz musicians such as Pat Metheny and John Scofield and a
          host of others including Bob Dylan, Tom Waits, Paul Simon, James
          Taylor, Stevie Ray Vaughan, Michael Hedges, Tommy Emmanuel, Joe Pass,
          Django Reinhardt, Muddy Waters, Son House, Guy Clarke, Martin Simpson,
          John Martyn, and many more.{" "}
        </p>
        <p>
          After a few years in London studying music at Goldsmiths University,
          he spent most of his early career as a bassist and guitarist in the
          luxury hotel and cruise scene, an experience which allowed him to
          travel to an array of exotic locations whilst honing his craft. He is
          recently relocated to Liverpool and is enjoying becoming familiar with
          the city’s thriving acoustic music scene.
        </p>
        <img
          src={circuslivephoto}
          alt="performing live on stage with Cirkus Arena"
          className={css.circuslivephoto}
        ></img>
        <p>
          As a bassist, guitarist, vocalist, pianist, and trombonist, Scott’s
          versatility and enthusiasm has made him a key ingredient to a host of
          bands, shows, and productions worldwide. He is currently working as
          one half of{" "}
          <a
            href="https://doublemaltduo.com/"
            alt="Double Malt Duo website"
            target="_blank"
          >
            Double Malt Duo
          </a>{" "}
          in a range of settings in the global entertainment industry.
        </p>
      </div>
    </div>
  );
}

export default About;
