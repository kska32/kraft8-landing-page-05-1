import React from 'react';
import {Helmet} from "react-helmet";
import Header01 from "./components/01-Header/index";
import Testimonial02 from "./components/02-Testimonial/index";
import Content03 from "./components/03-Content/index";
import Blog04 from "./components/04-Blog/index";
import Team05 from "./components/05-Team/index";
import Blog06 from "./components/06-Blog/index";
import Portfolio07 from "./components/07-Portfolio/index";
import Ecommerce08 from "./components/08-Ecommerce/index";
import Footer09 from "./components/09-Footer/index";

import './App.scss';

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta name="description" content="A Simple Test, kraft8-landing-page-05-1"/>
        <meta name="keywords" content="kraft8-landing-page-05-1"/>
      </Helmet>
      <Header01/>
      <Testimonial02/>
      <Content03/>
      <Blog04/>
      <Team05/>
      <Blog06/>
      <Portfolio07/>
      <Ecommerce08/>
      <Footer09/>
    </div>
  );
}

export default App;
