import React, { Component } from "react";
import {TimelineMax, TweenMax, Power2 as Back} from 'gsap'



function HocAnatomy(ComponentOG){
    return class extends Component{

        static defaultProps = {
            animationTime: .8
        }

        constructor(p){
            super(p)                        
            this.state = {tween:0}            
            this.tweenmax 
            this.timeout
        }

        componentDidUpdate(p, s){
            if(p.animateInc!==this.props.animateInc){                
                this.setState({tween:0})                
                window.clearTimeout(this.timeout)
                this.timeout = window.setTimeout(()=>{                   
                    this._animate() 
                }, 100)                
            }
        }

        componentWillUnmount() {
            if(this.tweenmax){
                this.tweenmax.kill()
            }
        }
      
        _animate(){            
            const stateCopy = {...this.state}
            const {animationTime, tweenAmount, timelineCharacter} = this.props

           
            const tweenObj = {
                tween:tweenAmount, 
                onUpdate:()=>{                
                    this.setState({tween:stateCopy.tween})
                },
                ease: Back.easeInOut,
                delay: this.props.delay
            }

            this.tweenmax = TweenMax.to(stateCopy, animationTime, tweenObj)
            
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
