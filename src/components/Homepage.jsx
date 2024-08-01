import css from "./homepage.module.css";
import scottmainphoto from "../assets/images/scottmainphoto.jpg";
// import About from "./About";
// import Media from "./Media";
// import Transcriptions from "./Transcriptions";
// import Contact from "./Contact";
import SocialButtons from "./SocialButtons";

function Homepage() {
  return (
    <>
      <section className={css.homepage}>
        <div className={css.homepageCenter}>
          <div className={css.headerTitles}>
            <h1>Scott Brown</h1>
            <h2>Guitarist</h2>
            <h3>Acoustic Folk, Jazz, Blues and Roots music.</h3>
          </div>
          {/* <img src={sofaguitar} className={css.sofaguitar}></img> */}
        </div>
        <img src={scottmainphoto} className={css.homepagephoto}></img>
        <div className={css.socialContainer}>
          <SocialButtons />
        </div>
      </section>
      {/* <About /> */}
      {/* <Media /> */}
      {/* <Transcriptions /> */}
      {/* <Contact /> */}
    </>
  );
}

export default Homepage;
