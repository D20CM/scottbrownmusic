import "./App.css";
import scottmainphoto from "../src/assets/images/scottmainphoto.jpg";

function App() {
  return (
    <>
      <h1>Scott Brown Music</h1>
      <p>15/07/2024</p>
      <p>
        Hi! I'm currently refurbishing this website, so please come back soon to
        visit the new site! In the interim, feel free to stay in touch on my{" "}
        <a
          href="https://www.instagram.com/scottbrownguitar/"
          alt="Scott Brown on Instagram"
          target="_blank"
        >
          Instagram.
        </a>
      </p>
      <div className="main-area">
        <img src={scottmainphoto} className="homepagephoto"></img>
        <div className="about">
          <h2>About</h2>
          <p>
            Scott Brown is a Welsh musician who is currently based in Liverpool.
            He is influenced as much by his background and early musical
            experiences playing trombone in his local brass band as his favorite
            musicians. These include folk musicians such as Bert Jansch and John
            Renbourn, jazz musicians such as Pat Metheny and John Scofield and a
            host of others including Bob Dylan, Tom Waits, Paul Simon, James
            Taylor, Stevie Ray Vaughan, Michael Hedges, Tommy Emmanuel, Joe
            Pass, Django Reinhardt, Muddy Waters, Son House, Guy Clarke, Martin
            Simpson, John Martyn, and many more.{" "}
          </p>
          <p>
            After a few years in London studying music at Goldsmiths University,
            he spent most of his early career as a bassist and guitarist in the
            luxury hotel and cruise scene, an experience which allowed him to
            travel to an array of exotic locations whilst honing his craft. He
            is recently relocated to Liverpool and is enjoying becoming familiar
            with the city’s thriving acoustic music scene.
          </p>
          <p>
            As a bassist, guitarist, vocalist, pianist, and trombonist, Scott’s
            versatility and enthusiasm has made him a key ingredient to a host
            of bands, shows, and productions worldwide. He is currently working
            as one half of{" "}
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
    </>
  );
}

export default App;
