import Navlinks from "./Navlinks";
import SocialButtons from "./SocialButtons";
import css from "./mobilenav.module.css";
import { useState } from "react";
function MobileNav() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  function toggleNavState() {
    setIsMobileNavOpen(!isMobileNavOpen);
  }

  return (
    <div className={css.mobilenavcontainer}>
      <button onClick={() => toggleNavState()}>NAV</button>

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
