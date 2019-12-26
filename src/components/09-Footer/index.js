import React,{Component} from "react";
import {ContextConsumer} from "../context";
import {simpleIoCallback, ioCallback, animate} from "../utils";
import "./index.scss";

export class Footer09 extends Component{

    componentDidMount(){
        ioCallback('.Footer09',()=>{
            this.props.global.setState({bullet08: true});
        },()=>{
            this.props.global.setState({bullet08: false});
        });

        ioCallback('.Footer09Wrapper',()=>{
            animate('.Footer09Wrapper','zoomInDown fast');
            animate('.Footer09Wrapper', 'zoomInDown fast');
            animate('.Footer09Wrapper', 'zoomInDown fast');
        });
    }

    render(){
        return <div className="Footer09" id={this.props.id}>
            <div className='Footer09Wrapper'>
                <div className='Footer09WrapperLeft'>
                    <div className='Footer09WrapperLeftHead'>
                        <div className='theTitle'>
                            kraft8
                        </div>
                        <div className='theDescs'>
                            This is a big one and i consider it one of the most important things for a designer.
                        </div>
                    </div>
                    <div className='Footer09WrapperLeftFoot'>
                        Copyright © 2019 Kraft8. All Rights Reserved
                    </div>
                </div>
                <div className='Footer09WrapperRight'>
                    <div className='col01'>
                        <div className='theHead'>Quick Links</div>
                        <div className='theItem'><a href='#'>Home</a></div>
                        <div className='theItem'><a href='#'>Portfolio</a></div>
                        <div className='theItem'><a href='#'>Features</a></div>
                        <div className='theItem'><a href='#'>Team</a></div>
                        <div className='theItem'><a href='#'>Blog</a></div>
                    </div>
                    <div className='col02'>
                        <div className='theHead'>Company</div>
                        <div className='theItem'><a href='#'>About</a></div>
                        <div className='theItem'><a href='#'>Contact</a></div>
                        <div className='theItem'><a href='#'>Careers</a></div>
                        <div className='theItem'><a href='#'>Press</a></div>
                    </div>
                    <div className='col03'>
                        <div className='theHead'>Information</div>
                        <div className='theItem'><a href='#'>Privacy Policy</a></div>
                        <div className='theItem'><a href='#'>Terms & Condition</a></div>
                        <div className='theItem'><a href='#'>FAQ</a></div>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default (props) => (
    <ContextConsumer>
        {gstate => <Footer09 {...props} global={gstate} />}
    </ContextConsumer>
);