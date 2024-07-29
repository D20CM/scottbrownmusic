import Sidebar from "../components/Sidebar";
import "../index.css";
import { Outlet } from "react-router-dom";

function Root() {
  return (
    <section className="maincontainer">
      <Sidebar />
      <Outlet />
    </section>
  );
}

export default Root;
