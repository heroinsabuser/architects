import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import style from "./Layout.module.css";
import Footer from "../Footer/Footer";

const Layout = () => {
  return (
    <div>
      <Header />
      <main className={style.container}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
