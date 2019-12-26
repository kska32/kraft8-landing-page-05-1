import React,{PureComponent} from 'react';
import {ContextProvider, ContextConsumer} from "./components/context";
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
import {animate} from "./components/utils";

import './App.scss';

export default class App extends PureComponent{
    constructor(props){
        super(props);
        this.state = {
            bullet00: false,
            bullet01: false,
            bullet02: false,
            bullet03: false,
            bullet04: false,
            bullet05: false,
            bullet06: false,
            bullet07: false,
            bullet08: false,
            setState: obj=>this.setState({...obj})
        }

        this.pageIcons = ['🍬','🍤', '🍕', '🍝', '🌭', '🌮', '🍿', '🥓', '🍖']
    }

    bulletsOnClick = ({target})=>{
        document.querySelector('#'+target.id.split('_')[1]).scrollIntoView({
            behavior: 'smooth'
        });
        //console.log(target.id.split('_')[1])
    }

    render(){
        return <ContextProvider value={this.state}>
                  <div className="App">
                      <Helmet>
                        <meta name="description" content="A Simple Test, kraft8-landing-page-05-1"/>
                        <meta name="keywords" content="kraft8-landing-page-05-1"/>
                      </Helmet>
                      <Header01 id='page-1'/>
                      <Testimonial02 id='page-2'/>
                      <Content03 id='page-3'/>
                      <Blog04 id='page-4'/>
                      <Team05 id='page-5'/>
                      <Blog06 id='page-6'/>
                      <Portfolio07 id='page-7'/>
                      <Ecommerce08 id='page-8'/>
                      <Footer09 id='page-9'/>
                      <div className='bullets'>
                        {
                            Object.values(this.state).map((v,i)=>{
                                  if(typeof v ==='boolean'){
                                     return <div key={i} 
                                                className={!v?'animated lightSpeedIn fast':'animated lightSpeedOut fast'} 
                                                data-activated={v} 
                                                onClick={this.bulletsOnClick}
                                                id={'go_page-'+(i+1)}
                                  >{this.pageIcons[i]}</div>
                                  }
                            })
                        }
                      </div>
                  </div>
          </ContextProvider>
    }
}

