import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {TimelineMax, Back} from 'gsap'

function HocCharacter(ComponentOG, character) {
    
    const timelineCharacter = new TimelineMax({onComplete:()=>{
        // console.log('timelineCharacter');
    }})

    return class extends Component {
        static defaultProps = {
            color: '#000000',
            size: 100,            
        }

        componentDidMount(){
            if(this.props.tl){
                this.props.tl.add(timelineCharacter, `-=${this.props.animationTime*.5}`)
            }
            // 
        }
        
        render () {
            
            const {animationTime, size} = this.props
            
            return (
                <ComponentOG
                    
                    animationTime={animationTime || undefined}
                    letter={character}
                    timelineCharacter={timelineCharacter}
                    className={this.props.className} 
                    {...this.props} />
            )
        }
    }
}

const ratio = 1/25

const MainCSS = styled('div')`
    /* border: 1px solid red; */
    display: inline-flex;
    position: relative;    
    /* height: 150px; */
    
    margin: 30px ${me=>me.size? me.size * ratio : 5}px;
    /* width: 1px; */
    & > canvas {
        display: block;
    }    

    
    
    /* flex-direction: row-reverse; */
    align-items: flex-end;
    ${p => Object.keys(p).map(k => `${k}: ${p[k]};`).join('\n')};
    
`

export {HocCharacter, MainCSS}
