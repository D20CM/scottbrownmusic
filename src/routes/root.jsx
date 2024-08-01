import Sidebar from "../components/Sidebar";
import MobileNav from "../components/MobileNav";
import "../index.css";
import { Outlet, useOutlet } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import Homepage from "../components/Homepage";

function Root() {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1100px)",
  });

  const outlet = useOutlet();

  return (
    <section className="maincontainer">
      {isDesktopOrLaptop ? <Sidebar /> : <MobileNav />}
      {outlet || <Homepage />}
    </section>
  );
}

export default Root;
