import React, { Component } from 'react'
import styled from 'styled-components'

import Pie from './Pie'
import Line from './Line'
import {HocCharacter, MainCSS} from './Character'

class Character extends Component {
    render () {      
        const {size, color, timelineCharacter} = this.props        
        return (
            <MainCSS flex-direction={`column`} align-items={`flex-start`} justify-content={`flex-end`} size={size}>
                <Pie 
                    custom={{fourSquare:[[true, true], [false, false]], size}}
                    start={180}
                    tweenAmount={360}                    
                    color={color}
                    timelineCharacter={timelineCharacter}
                    animationTime={this.props.animationTime}
                />

                <Line                    
                    tweenAmount={size}          
                    isVertical={true}
                    color={this.props.color}
                    timelineCharacter={timelineCharacter}
                    animationTime={this.props.animationTime}
                />     

                {/* <LineHorizontal
                    tweenAmount={90}          
                    isVertical={false}
                    color={this.props.color}
                    timeline={{tl:timelineCharacter, delay:'+=.1'}}
                />      */}
                
            </MainCSS>
        )
    }
}

const LineHorizontal = styled('canvas')`
    position: absolute;
    top: 70%;
    transform: translateX(-50%);
`.withComponent(Line)


export default HocCharacter(Character, 'd')