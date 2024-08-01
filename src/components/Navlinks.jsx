import { Link } from "react-router-dom";
import css from "./navlinks.module.css";

function Navlinks(setIsMobileNavOpen) {
  return (
    <ul className={css.menuLinks}>
      <Link to={"/home"} onClick={() => setIsMobileNavOpen(false)}>
        <li>Home</li>
      </Link>
      <Link to={"/about"} onClick={() => setIsMobileNavOpen(false)}>
        <li>About</li>
      </Link>
      <Link to={"/media"} onClick={() => setIsMobileNavOpen(false)}>
        <li>Media</li>
      </Link>
      {/* <a>
        <li>Gallery</li>
      </a> */}
      <Link to={"/transcriptions"} onClick={() => setIsMobileNavOpen(false)}>
        <li>Transcriptions</li>
      </Link>
      <Link to={"/contact"} onClick={() => setIsMobileNavOpen(false)}>
        <li>Contact</li>
      </Link>
    </ul>
  );
}

export default Navlinks;
