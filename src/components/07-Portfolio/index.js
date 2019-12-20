import React,{Component} from "react";
import "./index.scss";

import phone01 from './imgs/phone01.png';
import phone02 from './imgs/phone02.png';


export default class Portfolio07 extends Component{
    render(){
        return <div className="Portfolio07">
            <div className='PortFolio07Head'>
                <div className='PortFolio07HeadWrapper'>
                    <div className='theTitle'>PORTFOLIO</div>
                    <div className='theDescs'>Creating Results</div>
                </div>
            </div>
            <div className='PortFolio07Body'>
                <div className='PortFolio07BodyLeft'>
                    <div className='PortFolio07BodyLeftBox'>
                        <div className='bluecircle'>
                            <div className='phone01' style={{backgroundImage:`url(${phone01})`}}></div>
                            <div className='phone02' style={{backgroundImage:`url(${phone02})`}}></div>
                        </div>
                        
                    </div>
                </div>
                <div className='PortFolio07BodyRight'>
                    <div className='PortFolio07BodyRightBox'>
                        <div className='PortFolio07BodyRightBoxHead'>
                            <div className='theTitle'>Building Brands With Purpose And Passion</div>
                            <div className='theDescs'>Only those who risk going too far can possibly find out how far one can go.</div>
                        </div>
                        <div className='PortFolio07BodyRightBoxBody'>
                            <div className='viewBt'>View Case Study</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}