import React,{Component} from "react";
import {ContextConsumer} from "../context";
import {simpleIoCallback, ioCallback, animate} from "../utils";
import "./index.scss";


export class Content03 extends Component{
    componentDidMount(){
        ioCallback('.Content03',()=>{
            this.props.global.setState({bullet02: true});
        },()=>{
            this.props.global.setState({bullet02: false});
        })
        simpleIoCallback('.Content03WrapperRight', 'fadeInDown');
        simpleIoCallback('.Content03WrapperLeft', 'fadeInUp');
    }
    render(){
        return <div className="Content03" id={this.props.id}>
            <div className="Content03Wrapper">
                <div className="Content03WrapperLeft">
                    <div className="Content03WrapperLeftHead">
                        <div className="theTitle">
                            Building Brands With Purpose And Passion
                        </div>
                        <div className="theDescs">
                            This is a big one and I consider one of the most important, and difficult, things for designer to get right.
                        </div>
                    </div>
                    <div className="Content03WrapperLeftFoot">
                        <div className="someInfos">
                            <div className='infoA'>
                                <div className="theTitle">
                                    Ideas That Provoke
                                </div>
                                <div className="theDescs">
                                    Life isn't about finding yourself, it’s about creating yourself.
                                </div>
                            </div>
                            <div className='infoB'>
                                <div className="theTitle">
                                    Find Your Brand's Voice
                                </div>
                                <div className="theDescs">
                                    Better a diamond with a flaw than a pebble without one.
                                </div>
                            </div>
                        </div>
                        <div className="getStartedBT">
                            <div className="theButton">Get Started</div>
                        </div>
                    </div>
                </div>
                <div className="Content03WrapperRight">
                    <div className="theImage"></div>
                </div>
            </div>
        </div>
    }
}

export default (props) => (
    <ContextConsumer>
        {gstate => <Content03 {...props} global={gstate} />}
    </ContextConsumer>
);