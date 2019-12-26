import React,{Component} from "react";
import {ContextConsumer} from "../context";
import {simpleIoCallback, ioCallback, animate} from "../utils";
import "./index.scss";

import bg01 from './imgs/bg01.png';
import bg02 from './imgs/bg02.png';
import bg03 from './imgs/bg03.png';
import bg04 from './imgs/bg04.png';

import p01 from './imgs/p01.png';
import p02 from './imgs/p02.png';
import p03 from './imgs/p03.png';
import p04 from './imgs/p04.png';

export class Blog06 extends Component{
    items = [
        {
            title01: 'Why Design Systems Are Going To Shape The Internet',
            title02: 'Having worked across a number of different industries in my career before …',
            bgImage: bg01,
            avatar: p01,
            avatarTitle01: 'Benedikt Safiyulin',
            avatarTitle02: 'Sep 9 - 8 min read'
        },
        {
            title01: 'Here’s What Developers Want Designers To Know About Dveloper Handoff',
            title02: 'Having worked across a number of different industries in my career before …',
            bgImage: bg02,
            avatar: p02,
            avatarTitle01: 'Martín Abasto',
            avatarTitle02: 'Sep 9 - 8 min read'
        },
        {
            title01: 'Here’s What Developers Want Designers To Know About Dveloper Handoff',
            title02: 'Having worked across a number of different industries in my career before …',
            bgImage: bg03,
            avatar: p03,
            avatarTitle01: 'Bárbara Cotilla',
            avatarTitle02: 'Sep 9 - 8 min read'
        },
        {
            title01: 'We Need To Talk About The Plague Of Designer’s Insecurity',
            title02: 'Having worked across a number of different industries in my career before …',
            bgImage: bg04,
            avatar: p04,
            avatarTitle01: 'Beatriz Brito',
            avatarTitle02: 'Sep 9 - 8 min read'
        }
    ]

    componentDidMount(){
        ioCallback('.Blog06',()=>{
            this.props.global.setState({bullet05: true});
        },()=>{
            this.props.global.setState({bullet05: false});
        });

        simpleIoCallback('.Blog06WrapperHeadWrapper', 'flip fast');

        ioCallback('.Blog06WrapperBody',()=>{
            animate(`.Blog06WrapperBodyItem:nth-of-type(1)`, 'fadeInUp fast');
            animate(`.Blog06WrapperBodyItem:nth-of-type(2)`, 'fadeInLeft fast');
            animate(`.Blog06WrapperBodyItem:nth-of-type(3)`, 'fadeInRight fast');
            animate(`.Blog06WrapperBodyItem:nth-of-type(4)`, 'fadeInDown fast');
        })
    }

    render(){
        return <div className="Blog06" id={this.props.id}>
            <div className="Blog06Wrapper">
                <div className="Blog06WrapperHead">
                    <div className="Blog06WrapperHeadWrapper">
                        <div className="title01">
                            BLOG
                        </div>
                        <div className='title02'>
                            Live Today, Tomorrow Will <br/> Cost More
                        </div>
                    </div>
                </div>
                <div className="Blog06WrapperBody">
                    {
                        this.items.map((v,i)=>{
                            return <div key={i} className="Blog06WrapperBodyItem" >
                                    <div className='Blog06WrapperBodyItemBox' style={{backgroundImage:`url(${v.bgImage})`}}>
                                        <div className='theInfos'>
                                            <div className='theInfosHead'>
                                                <div className='list01'>
                                                    {v.title01}
                                                </div>
                                                <div className='list02'>
                                                    {v.title02}
                                                </div>
                                            </div>
                                            <div className='theInfosFoot'>
                                                <div className='avatar' style={{backgroundImage:`url(${v.avatar})`}}></div>
                                                <div className='listGroup'>
                                                    <div className='listGroupList01'>
                                                        {v.avatarTitle01}
                                                    </div>
                                                    <div className='listGroupList02'>
                                                        {v.avatarTitle02}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            </div>  
                        })
                    }
                </div>
            </div>
        </div>
    }
}

export default (props) => (
    <ContextConsumer>
        {gstate => <Blog06 {...props} global={gstate} />}
    </ContextConsumer>
);