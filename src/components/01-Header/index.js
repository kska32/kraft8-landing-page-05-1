import React,{Component} from "react";
import "./index.scss";

export default class Header01 extends Component{
    render(){
        return <div className="Header01">
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
                                <div className='shoesName'>Nike Joyride Run Flyknit</div>
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
                                <div className='bigShoesBgImg'></div>
                            </div>
                            <div className='navContentRightWrapperRight'>
                                <div className='navContentRightWrapperRightWrapper'>
                                    <div className='shoesBox'>
                                        <div className='shoesItem'>
                                        </div>
                                        <div className='shoesItem'>
                                        </div>
                                        <div className='shoesItem'>
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