import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Routes from "../../routes/Routers";

import AdminNav from "../../admin/AdminNav";

const Layout = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname.startsWith("/dashboard") ? <AdminNav /> : <Header />}

      <div>
        <Routes />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
