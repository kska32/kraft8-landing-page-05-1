import React,{Component} from "react";
import {Helmet} from "react-helmet";
import {ContextConsumer} from "../context";
import {ioCallback, animate} from "../utils";

import "./index.scss";

import bigShoe01 from "./imgs/bigShoe01.png";
import bigShoe02 from "./imgs/bigShoe02.png";
import bigShoe03 from "./imgs/bigShoe03.png";


class Header01 extends Component{
    constructor(props){
        super(props);
        this.state = {
            clickedTinyShoeNo: 0
        }
    }

    bigShoeLst = {
        0:{
            path: bigShoe01, 
            effect: 'fadeInRight faster'
        },
        1:{
            path: bigShoe02,
            effect: 'fadeInRight faster'
        }, 
        2:{
            path: bigShoe03,
            effect: 'fadeInRight faster'
        }
    };

    tinyShoeClickHandle = (tinyShoeNo)=>{
        this.setState({clickedTinyShoeNo: tinyShoeNo});
        animate('.bigShoesBgImg', this.bigShoeLst[tinyShoeNo].effect);
    }

    componentDidMount(){
        ioCallback('.Header01',()=>{
            this.props.global.setState({bullet00: true});
        },()=>{
            this.props.global.setState({bullet00: false});
        })

        ioCallback('.navBar',()=>{
            animate('.navBar', 'fadeInDown fast');
        });

        ioCallback('.navContentLeft',()=>{
            animate('.navContentLeft', 'fadeInLeft fast');
        });

        ioCallback('.navContentRightWrapperRight',()=>{
            animate('.navContentRightWrapperRight', 'fadeInRight fast');
        });

        ioCallback('.navContentRightWrapperLeft',()=>{
            animate('.navContentRightWrapperLeft', 'lightSpeedIn fast');
        })
    }

    render(){
        let {clickedTinyShoeNo} = this.state;

        return <div className="Header01" id={this.props.id}>
                        <Helmet>
                            <link rel="preload" as="image" href={bigShoe01}/>
                            <link rel="preload" as="image" href={bigShoe02}/>
                            <link rel="preload" as="image" href={bigShoe03}/>
                        </Helmet>
                        <div className="Header01Wrapper">
                            <div className="navBar">
                                <div className="navBarLeft">
                                    <span className='navItem'>Kraft8</span>
                                    <span className='navItem'>Explore</span>
                                    <span className='navItem'>Work</span>
                                    <span className='navItem'>Services</span>
                                    <span className='navItem'>Contact</span>
                                </div>
                                <div className="navBarRight">
                                    <span className='signinBt'>Log In</span>
                                    <span className='signupBt'>Sign Up</span>
                                </div>
                            </div>
                            <div className='navContent'>
                                <div className='navContentLeft'>
                                    <div className='navContentLeftHead'>
                                        <div className='theInfos'>
                                            <div className='shoesDesc'>Men's Running Shoe</div>
                                            <div className='shoesName'>Nike Joyride <br/> Run Flyknit</div>
                                            <div className='shoesPrice'>$180</div>
                                        </div>
                                        <div className='theButton'>
                                            <div className='addtoCartBt'>Add To Cart</div>
                                        </div>
                                    </div>
                                    <div className='navContentLeftFoot'>
                                        <div className='navContentLeftFootLeft'>
                                            <div className='photoBgcolor'></div>
                                            <div className='photoFgImg'></div>
                                        </div>
                                        <div className='navContentLeftFootRight'>
                                            <div className='shoesName'>Air Jordan 6 Retro</div>
                                            <div className='shoesOthers'>
                                                <div className='shoesPrice'>$225</div>
                                                <div className='plusBt'>➕</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="navContentRight">
                                    <div className="navContentRightWrapper">
                                        <div className='navContentRightWrapperLeft'>
                                            <div className='bigShoesBgcolor'></div>
                                            <div className={'bigShoesBgImg'} 
                                                    data-index={'index'+clickedTinyShoeNo} 
                                                    style={{backgroundImage:`url(${this.bigShoeLst[clickedTinyShoeNo].path})`}}
                                            />
                                        </div>
                                        <div className='navContentRightWrapperRight'>
                                            <div className='navContentRightWrapperRightWrapper'>
                                                <div className='shoesBox' >
                                                    <div className='shoesItem' onClick={()=>this.tinyShoeClickHandle(0)}>
                                                    </div>
                                                    <div className='shoesItem' onClick={()=>this.tinyShoeClickHandle(1)}>
                                                    </div>
                                                    <div className='shoesItem' onClick={()=>this.tinyShoeClickHandle(2)}>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
        </div>
    }
}

export default (props) => (
    <ContextConsumer>
        {gstate => <Header01 {...props} global={gstate} />}
    </ContextConsumer>
);
