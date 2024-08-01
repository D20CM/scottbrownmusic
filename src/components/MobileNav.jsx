import Navlinks from "./Navlinks";
import SocialButtons from "./SocialButtons";
import css from "./mobilenav.module.css";
import { useState } from "react";
import { TiThMenu } from "react-icons/ti";
import { IoCloseSharp } from "react-icons/io5";

function MobileNav() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  function toggleNavState() {
    setIsMobileNavOpen(!isMobileNavOpen);
    window.scrollTo(0, 0);
  }

  return (
    <div className={css.mobilenavcontainer}>
      <button onClick={() => toggleNavState()}>
        {isMobileNavOpen ? <IoCloseSharp /> : <TiThMenu />}
      </button>

      {isMobileNavOpen && (
        <div className={css.mobilenav}>
          <nav className={css.mobilenavlinks}>
            <Navlinks setIsMobileNavOpen={setIsMobileNavOpen} />
          </nav>
          <SocialButtons />
        </div>
      )}
    </div>
  );
}

export default MobileNav;
