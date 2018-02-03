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



const MainCSS = styled('div')`    
    display: inline-flex;
    position: relative;    

    /* border: 1px solid red; */
    
    margin-right: ${me=>{
        const ratio = me.theme.letterspacing / me.theme.size
        return me.size * ratio
    }}px;

    margin-left: ${me=>{
        const ratio = me.theme.letterspacing / me.theme.size * 3
        return me.space ? `${(me.size * ratio)}px` : 'initial'
    }};

    & > canvas {
        display: block;
    }    

    margin-bottom: ${me=>{
        const ratio = 20 / me.theme.size
        return me.size * ratio
    }}px;
    
    

    /* flex-direction: row-reverse; */
    align-items: flex-end;
    ${p => Object.keys(p).map(k => `${k}: ${p[k]};`).join('\n')};
    
`

export {HocCharacter, MainCSS}
