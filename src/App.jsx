import css from "./app.module.css";
import Sidebar from "./components/Sidebar";
import Homepage from "./components/Homepage";
import HomepageRight from "./components/HomepageRight";
import About from "./components/About";

function App() {
  return (
    <>
      <div className={css.homepagecontainer}>
        <Sidebar />
        <Homepage />
        <HomepageRight />
      </div>

      <About />
    </>
  );
}

export default App;
