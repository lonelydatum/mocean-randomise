import React, { Component } from 'react'
import styled from 'styled-components'

import Pie from './Pie'
import Line from './Line'
import {HocCharacter, MainCSS} from './Character'


class Character extends Component {
    render () {                
        const {size, color, timelineCharacter} = this.props
        const total = size * 1
        const diag = Math.sqrt( (total*total) + (total*total) )
        console.log(diag);
        return (
            <MainCSS width={`${total}px`} height={`${total}px`} flex-direction={`column`} justify-content={`space-between`} size={size}>
                  
                
                <Line                    
                    tweenAmount={total}          
                    isVertical={false}
                    color={this.props.color}
                    timelineCharacter={timelineCharacter}
                    animationTime={this.props.animationTime}
                />   

                <LineDiagonal
                    tweenAmount={diag*.98}          
                    isVertical={false}
                    color={this.props.color}
                    timelineCharacter={timelineCharacter}
                    animationTime={this.props.animationTime}
                />   

                <Line                    
                    tweenAmount={total}          
                    isVertical={false}
                    color={this.props.color}
                    timelineCharacter={timelineCharacter}
                    animationTime={this.props.animationTime}
                />   
            </MainCSS>
        )
    }
}



const LineDiagonal = styled(Line)`
    position: absolute;
    transform: translate(-50%, -50%) rotate(135deg);
    transform-origin: 50% 50%;
    top: 50%;
    left: 50%;
`


const PieDiagonal = styled(Pie)`
    position: absolute;
    transform: translateY(-50%);
    transform-origin: 50% 0%;
    top: 50%;
    /* left: 50%; */
`


export default HocCharacter(Character, 'Z')