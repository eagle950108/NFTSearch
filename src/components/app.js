import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollToTopBtn from "./menu/ScrollToTop";

import Loading from "./components/Loading/Loading";
import "react-toastify/dist/ReactToastify.css";

const Header = lazy(() => import("./menu/header"));
const Explore = lazy(() => import("./pages/explore/"));
const NotFound = lazy(() => import("./components/404/"));

const App = () => {

  return (
    <div className="wraper">
      <Router>
        <Suspense fallback={<Loading />}>
          <Header />
          <Routes>
            <Route path="/" element={<Explore />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Router>
      <ScrollToTopBtn />
    </div>
  );
};
export default App;
