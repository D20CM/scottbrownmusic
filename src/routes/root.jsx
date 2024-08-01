import Sidebar from "../components/Sidebar";
import MobileNav from "../components/MobileNav";
import "../index.css";
import { Outlet } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

function Root() {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1100px)",
  });

  return (
    <section className="maincontainer">
      {isDesktopOrLaptop ? <Sidebar /> : <MobileNav />}
      <Outlet />
    </section>
  );
}

export default Root;
