import React,{Component} from "react";
import {ContextConsumer} from "../context";
import {simpleIoCallback, ioCallback, animate} from "../utils";
import "./index.scss";


export class Testimonial02 extends Component{

    componentDidMount(){
        ioCallback(".Testimonial02", ()=>{
            this.props.global.setState({bullet01: true});
        },()=>{
            this.props.global.setState({bullet01: false});
        })

        simpleIoCallback('.Testimonial02WrapperHeadWrapper', 'flipInX fast');

        document.querySelectorAll('.Testimonial02WrapperBodyWrapperItem')
            .forEach((v,i)=>{
                simpleIoCallback(`.${v.className.split(' ')[0]}:nth-of-type(${i+1})`, 'flipInX fast')
            })
    }

    render(){
        return <div className='Testimonial02' id={this.props.id}>
                        <div className='Testimonial02Wrapper'>
                                <div className='Testimonial02WrapperHead'>
                                    <div className='Testimonial02WrapperHeadWrapper'>
                                        <div className='Testimonial02WrapperHeadWrapperTitle'>
                                            We Are Loved By Users And <br/> Clients Worldwide
                                        </div>
                                        <div className='Testimonial02WrapperHeadWrapperContent'>
                                            Only those who risk going too far can possibly find out <br/> how far one can go.
                                        </div>
                                    </div>
                                </div>
                                <div className='Testimonial02WrapperBody'>
                                    <div className='Testimonial02WrapperBodyWrapper'>
                                        <div className='Testimonial02WrapperBodyWrapperItem'>
                                            <div className='Testimonial02WrapperBodyWrapperItemInside'>
                                                <div className='avatar'></div>
                                                <div className='comment'>
                                                    "It's not only about what you write but how you present it. Only those who risk going too far can possibly find out how far one can go."
                                                </div>
                                                <div className='thename'>
                                                    Georges Embolo
                                                </div>
                                                <div className='thejob'>
                                                    Product Designer @Apex
                                                </div>
                                            </div>
                                        </div>
                                        <div className='Testimonial02WrapperBodyWrapperItem'>
                                            <div className='Testimonial02WrapperBodyWrapperItemInside'>
                                                <div className='avatar'></div>
                                                <div className='comment'>
                                                    "It's not only about what you write but how you present it. Only those who risk going too far can possibly find out how far one can go."
                                                </div>
                                                <div className='thename'>
                                                    Artem Sazonov
                                                </div>
                                                <div className='thejob'>
                                                    Product Designer @Apex
                                                </div>
                                            </div>
                                        </div>
                                        <div className='Testimonial02WrapperBodyWrapperItem'>
                                            <div className='Testimonial02WrapperBodyWrapperItemInside'>
                                                <div className='avatar'></div>
                                                <div className='comment'>
                                                    "It's not only about what you write but how you present it. Only those who risk going too far can possibly find out how far one can go."
                                                </div>
                                                <div className='thename'>
                                                    Pin Jung-Eum
                                                </div>
                                                <div className='thejob'>
                                                    Product Designer @Apex
                                                </div>
                                            </div>
                                        </div>
                                        <div className='Testimonial02WrapperBodyWrapperItem'>
                                            <div className='Testimonial02WrapperBodyWrapperItemInside'>
                                                <div className='avatar'></div>
                                                <div className='comment'>
                                                    "It's not only about what you write but how you present it. Only those who risk going too far can possibly find out how far one can go."
                                                </div>
                                                <div className='thename'>
                                                    Tao Yi
                                                </div>
                                                <div className='thejob'>
                                                    Product Designer @Apex
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
        {gstate => <Testimonial02 {...props} global={gstate} />}
    </ContextConsumer>
);
