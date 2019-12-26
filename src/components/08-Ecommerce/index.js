import React,{Component} from "react";
import {ContextConsumer} from "../context";
import {simpleIoCallback, ioCallback, animate} from "../utils";
import "./index.scss";

import avatar from './imgs/avatar.png';
import bed from './imgs/bed.png';
import sofa from './imgs/sofa.png'

export class Ecommerce08 extends Component{

    componentDidMount(){
        ioCallback('.Ecommerce08',()=>{
            this.props.global.setState({bullet07: true});
        },()=>{
            this.props.global.setState({bullet07: false});
        });

        ioCallback('.Ecommerce08Wrapper',()=>{
            animate('.Ecommerce08WrapperRight','rotateInDownLeft fast');
            animate('.Ecommerce08WrapperLeftHead', 'rotateInDownRight fast');
            animate('.Ecommerce08WrapperLeftFoot', 'rotateInDownLeft fast');
        });
    }

    render(){
        return <div className="Ecommerce08" id={this.props.id}>
            <div className='Ecommerce08Wrapper'>
                <div className='Ecommerce08WrapperLeft'>
                    <div className='Ecommerce08WrapperLeftHead'>
                        <div className='avatarGroup'>
                            <div className='avatar' style={{backgroundImage:`url(${avatar})`}}>
                                <div className='followerNo'>+5</div>
                            </div>
                            
                        </div>
                        <div className='theTitle'>
                            Furniture Is Art With An Attitude
                        </div>
                        <div className='theDescs'>
                            This is a big one and I consider one of the most important thing for a designer to get right.                        
                        </div>
                        <div className='cartGroup'>
                            <div className='priceBt'>Add To Cart</div>
                            <div className='thePrice'>$1299</div>
                        </div>
                    </div>
                    <div className='Ecommerce08WrapperLeftFoot'>
                            <div className='goodsInfo'>
                                <div className='theBed' style={{backgroundImage:`url(${bed})`}}> 
                                </div>
                                <div className='theDescs'>
                                    <div className='theName'>Easy Squeeze Sofa Bed</div>
                                    <div className='thePrice'>$1595</div>
                                </div>
                            </div>
                    </div>
                </div>
                <div className='Ecommerce08WrapperRight'>
                        <div className='bigImage' style={{backgroundImage:`url(${sofa})`}}>
                        </div>
                </div>
            </div>
        </div>
       
    }
}

export default (props) => (
    <ContextConsumer>
        {gstate => <Ecommerce08 {...props} global={gstate} />}
    </ContextConsumer>
);