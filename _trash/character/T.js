import React, { Component } from 'react'
import styled from 'styled-components'

import Pie from './Pie'
import Line from './Line'
import {HocCharacter, MainCSS} from './Character'

class Character extends Component {
    render () {                
        const {size, color, timelineCharacter} = this.props
        return (
            <MainCSS flex={`block`} width={`${size*.75}px`} height={`${size*1.5}px`} size={size}>
                 <LineTop                    
                    tweenAmount={size*1.5}          
                    isVertical={true}
                    color={this.props.color}
                    timelineCharacter={timelineCharacter}
                    animationTime={this.props.animationTime}
                />    

                <PieHor 
                    custom={{fourSquare:[[false, false], [true, true]], size:size*.75}}
                    start={0} 
                    tweenAmount={180} 
                    color={color}                   
                    timelineCharacter={timelineCharacter}
                    animationTime={this.props.animationTime}
                />    
                 

                {/* <LineBottom                
                    tweenAmount={size*.5}          
                    isVertical={false}
                    color={this.props.color}
                    timelineCharacter={timelineCharacter}
                />      */}
                
            </MainCSS>
        )
    }
}

const LineTop = styled(Line)`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
`

const PieHor = styled(Pie)`    
    position: absolute;
    top: 50%;
    transform: translateY(-100%);
`

const LineBottom = styled(Line)`    
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
`



export default HocCharacter(Character, 'd')