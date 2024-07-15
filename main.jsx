import React from "react";
import ReactDOM from "react-dom/client";

// ---------------------------
import Info from "./components/info";
import AboutMe from "./components/About";
import Interest from "./components/interest";
import Footer from "./components/Footer";

import "./css/style.css";
// --------------------------

ReactDOM.createRoot(document.querySelector(".Bussiness-Card")).render(
  <React.StrictMode>
    <Info />
    <AboutMe />
    <Interest />
    <Footer />
  </React.StrictMode>
);
