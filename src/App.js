import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import HeroPage from "./Components/HeroPage/HeroPage";
import SignUp from "./Components/SignUp/SignUp";
import LoginForm from "./Components/SystemAdmin/LoginForm/LoginForm";
import LandingPage from "./Components/SystemAdmin/LandingPage/LandingPage";
import Displayer from "./Components/SystemAdmin/LandingPage/Displayer";
// import FeedBack from "./Components/Customer/Rating/FeedBack";
import FeedBack from "./Components/Customer/Rating/FeedBack";
import SuperLanding from "./Components/SuperAdmin/SuperLanding";
import TemporaryDrawer from "./Components/SuperAdmin/ClientDetails";
import RequestDemo from "./Components/SystemAdmin/RequestDemo/RequestDemo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HeroPage />} />
        <Route exact path="/sign-up" element={<SignUp />} />
        <Route exact path="/log-in" element={<LoginForm />} />
        <Route exact path="/landing" element={<LandingPage />} />
        <Route exact path="/displayer" element={<Displayer />} />
        <Route exact path="/feedback" element={<FeedBack />} />
        {/* </Route> */}
        <Route exact path="/superLanding" element={<SuperLanding />} />
        <Route exact path="/clientDetails" element={<TemporaryDrawer />} />
        <Route exact path="/requestDemo" element={<RequestDemo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
