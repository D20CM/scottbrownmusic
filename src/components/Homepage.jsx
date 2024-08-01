import css from "./homepage.module.css";
// import sofaguitar from "../assets/images/leandro-mazzuquini-ZIbrlLp63PY-unsplash.jpg";
import scottmainphoto from "../assets/images/scottmainphoto.jpg";

function Homepage() {
  return (
    <section className={css.homepage}>
      <div className={css.homepageCenter}>
        <div className={css.headerTitles}>
          <h1>SCOTT BROWN</h1>
          <h2>GUITARIST</h2>
          <h3>Acoustic Folk, Jazz, Blues and Roots music.</h3>
        </div>
        {/* <img src={sofaguitar} className={css.sofaguitar}></img> */}
      </div>
      <img src={scottmainphoto} className={css.homepagephoto}></img>
    </section>
  );
}

export default Homepage;
