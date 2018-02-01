import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {TimelineMax, Back} from 'gsap'
import _ from 'lodash'


function HocCharacter(ComponentOG, character) {
    
    const timelineCharacter = new TimelineMax({onComplete:()=>{
        // console.log('timelineCharacter');
    }})

    return class extends Component {
        static defaultProps = {
            color: '#000000',
            size: 100,            
        }

        componentDidUpdate(p){
            
            
        }

        render () {            
            const {animationTime, size, animateInc} = this.props

            const min = animationTime * .5
            const max = animationTime * 1.8
            const time =  _.random(min, max)
            
            return (
                <ComponentOG
                    space={this.props.space}
                    animateInc={animateInc}                    
                    letter={character}
                    timelineCharacter={timelineCharacter}
                    className={this.props.className} 
                    {...this.props}
                    animationTime={time || undefined}
                     />
            )
        }
    }
}

const ratio = 1/25

const MainCSS = styled('div')`    
    display: inline-flex;
    position: relative;    
    /* height: 150px; */
    
    margin: 0px ${me=>me.size? me.size * ratio : 5}px;
    margin-left: ${me=>{
        return me.space ? `${(me.size * ratio * 10)}px` : 'initial'
    }};
    /* width: 1px; */
    & > canvas {
        display: block;
    }    

    
    
    /* flex-direction: row-reverse; */
    align-items: flex-end;
    ${p => Object.keys(p).map(k => `${k}: ${p[k]};`).join('\n')};
    
`

export {HocCharacter, MainCSS}
