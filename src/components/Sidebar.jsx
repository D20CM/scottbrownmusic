import css from "./sidebar.module.css";
import Navlinks from "./Navlinks";
import SocialButtons from "./SocialButtons";

function Sidebar() {
  return (
    <div className={css.sidebar}>
      <nav className={css.menu}>
        <Navlinks />
        <SocialButtons />
      </nav>
    </div>
  );
}

export default Sidebar;
