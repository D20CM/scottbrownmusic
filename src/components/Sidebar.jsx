import css from "./sidebar.module.css";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className={css.sidebar}>
      <nav className={css.menu}>
        <ul className={css.menuLinks}>
          <Link to={"/home"}>
            <li>Home</li>
          </Link>
          <Link to={"/about"}>
            <li>About</li>
          </Link>
          <Link to={"/media"}>
            <li>Media</li>
          </Link>
          <a>
            <li>Gallery</li>
          </a>
          <Link to={"/transcriptions"}>
            <li>Transcriptions</li>
          </Link>
          <a>
            {" "}
            <li>Contact</li>
          </a>
        </ul>
      </nav>
      <div className={css.socialButtons}>
        <a
          id="facebook-share"
          href="https://www.facebook.com/scottbrownmusic"
          alt="Scott Brown on Facebook"
        >
          <i
            className="fab large-social fa-facebook"
            data-toggle="tooltip"
            title="Facebook"
          ></i>
        </a>

        <a
          id="insta"
          href="https://www.instagram.com/scottbrownguitar/"
          alt="Scott Brown on Instagram"
        >
          <i
            className="fab large-social fa-instagram"
            data-toggle="tooltip"
            title="Instagram"
          ></i>
        </a>
        <a
          id="youtube"
          href="https://www.youtube.com/@ScottBrown500"
          alt="Scott Brown on YouTube"
        >
          <i
            className="fab large-social fa-youtube"
            data-toggle="tooltip"
            title="Youtube"
          ></i>
        </a>
      </div>
    </div>
  );
}

export default Sidebar;
