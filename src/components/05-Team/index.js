import React,{Component} from "react";
import "./index.scss";

import p01 from './imgs/p01.png';
import p02 from './imgs/p02.png';
import p03 from './imgs/p03.png';
import p04 from './imgs/p04.png';
import p05 from './imgs/p05.png';


export default class Team05 extends Component{
    items = [
        {
            img: p01,
            name: 'Paulina Gayoso',
            job: 'Head Of Sales'
        },
        {
            img: p02,
            name: 'Georges Embolo',
            job: 'Product Designer'
        },
        {
            img: p03,
            name: 'Justine Marshall',
            job: 'Senior Developer'
        },
        {
            img: p04,
            name: 'Gabriel Soares',
            job: 'Product Manager'
        },
        {
            img: p05,
            name: 'Edward Lindgren',
            job: 'Marketing Manager'
        }
    ];

    render(){
        return <div className='Team05'>
            <div className='Team05head'>
                <div className='Team05headWrapper'>
                    Teamwork Makes <br/> The Dream Work
                </div>
            </div>
            <div className='Team05body'>
                <div className='Team05bodyWrapper'>
                    <div className='Team05bodyWrapperItemsWrapper'>
                        {
                            this.items.map((v,i)=>{
                                return <div className='Team05bodyWrapperItem' key={i}>
                                    <div className='Team05bodyWrapperItemBox'>
                                        <div className='thePhoto' style={{backgroundImage:`url(${v.img})`}}></div>
                                        <div className='theTitle'>{v.name}</div>
                                        <div className='theJob'>{v.job}</div>
                                    </div>
                                </div>
                            }) 
                        }
                    </div>
                </div>
            </div>
        </div>
    }
}