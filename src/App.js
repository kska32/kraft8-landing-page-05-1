import React from 'react';
import {Helmet} from "react-helmet";
import Header01 from "./components/01-Header/index";
import Testimonial02 from "./components/02-Testimonial/index";
import Content03 from "./components/03-Content/index";

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
    </div>
  );
}

export default App;
