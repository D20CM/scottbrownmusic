import css from "./sidebar.module.css";

function Sidebar() {
  return (
    <div className={css.sidebar}>
      <nav className={css.menu}>
        <ul className={css.menuLinks}>
          <li>Home</li>
          <li>About</li>
          <li>Media</li>
          <li>Gallery</li>
          <li>Transcriptions</li>
          <li>Contact</li>
        </ul>
      </nav>
      <div className={css.socialButtons}>
        <a
          id="facebook-share"
          href="https://www.facebook.com/Doublemaltacousticduo"
          alt="Double Malt Duo on Facebook"
        >
          <i
            className="fab large-social fa-facebook-square"
            data-toggle="tooltip"
            title="Facebook"
          ></i>
        </a>

        <a
          id="insta"
          href="https://www.instagram.com/doublemaltduo/"
          alt="Double Malt Duo on Instagram"
        >
          <i
            className="fab large-social fa-instagram-square"
            data-toggle="tooltip"
            title="Instagram"
          ></i>
        </a>
        <a
          id="youtube"
          href="https://www.youtube.com/@doublemalt"
          alt="Double Malt Duo on YouTube"
        >
          <i
            className="fab large-social fa-youtube-square"
            data-toggle="tooltip"
            title="Youtube"
          ></i>
        </a>
      </div>
    </div>
  );
}

export default Sidebar;
