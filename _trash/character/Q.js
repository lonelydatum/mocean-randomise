import React, { Component } from 'react'
import styled from 'styled-components'
import Pie from './Pie'
import Line from './Line'
import {HocCharacter, MainCSS} from './Character'

class Character extends Component {
    render () {                
        const {size, color, timelineCharacter} = this.props
        return (
            <MainCSS align-items={`flex-start`}  size={size}>
                <Pie 
                    custom={{fourSquare:[[true, true], [true, true]], size}}
                    start={0}
                    tweenAmount={360}                    
                    color={color}
                    timelineCharacter={timelineCharacter}
                    animationTime={this.props.animationTime}
                />
                 <Line                    
                    tweenAmount={size*1.5}          
                    isVertical={true}
                    color={this.props.color}
                    timelineCharacter={timelineCharacter}
                    animationTime={this.props.animationTime}
                />  
                 <LineQ                    
                    tweenAmount={size*.2}          
                    isVertical={false}
                    color={this.props.color}
                    timelineCharacter={timelineCharacter}
                    animationTime={this.props.animationTime}
                />     
            </MainCSS>
        )
    }
}

const LineQ = styled(Line)`
    align-self: flex-end;
    transform: translate(-3px, 0px) rotate(-45deg);
    transform-origin: 0% 50%;
`


export default HocCharacter(Character, '')