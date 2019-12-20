import React,{Component} from "react";
import "./index.scss";

import img01 from "./imgs/friend01.png";
import img02 from "./imgs/friend02.png";
import img03 from "./imgs/friend03.png";

export default class Blog04 extends Component{
    constructor(props){
        super(props);
        this.items = [
            {
                img: img01,
                title: 'Why Design Systems Are Going To Shape The Internet',
                content: 'Having worked across a number of different industries in my career before …'
            },
            {
                img: img02,
                title: 'We Need To Talk About The Plague Of Designer’s Insecurity',
                content: 'Having worked across a number of different industries in my career before …'
            },
            {
                img: img03,
                title: 'Here’s What Developers Want Designers To Know About Dveloper Handoff',
                content: 'Having worked across a number of different industries in my career before …'
            }
        ]
    }
    render(){
        return <div className='Blog04'>
            <div className='Blog04Wrapper'>
                <div className='Blog04WrapperHead'>
                    <div className='Blog04WrapperHeadWrapper'>
                        <div className='theTitle'>
                            You Got A Friend In The Business
                        </div>
                        <div className='theContent'>
                            Only those who risk going too far can possibly find out how far one can go.
                        </div>
                    </div>
                </div>
                <div className='Blog04WrapperBody'>
                    {
                        this.items.map((v,i)=>{
                            return <div className='Blog04WrapperBodyItem' key={i}>
                                    <div className='Blog04WrapperBodyItemPhoto' style={{backgroundImage: `url(${v.img})`}}>
                                        <div className='colorfulBT'></div>
                                    </div>
                                    <div className='theTitle'>{v.title}</div>
                                    <div className='theContent'>{v.content}</div>
                                    
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    }
}