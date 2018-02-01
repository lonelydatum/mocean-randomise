import React, { Component } from "react";
import {TimelineMax, Back} from 'gsap'

function HocAnatomy(ComponentOG){
    return class extends Component{

        static defaultProps = {
            animationTime: .8
        }

        constructor(p){
            super(p)                        
            this.state = {tween:0}
        }

      
        _animate(){      
            
            const tlThis = new TimelineMax()
            const stateCopy = {...this.state}
            const {animationTime, tweenAmount, timelineCharacter} = this.props
            
            // console.log(animationTime);      

            tlThis.to(stateCopy, animationTime, {tween:tweenAmount, onUpdate:()=>{
               this.setState({tween:stateCopy.tween})                              
            }})
            
            if(timelineCharacter){            
                timelineCharacter.add(tlThis) 
            }
        }

        render(){
            return <ComponentOG 
                {...this.props}
                tween={this.state.tween}
                animate={this._animate.bind(this)
                }/>
        }
    }
}

export default HocAnatomy


