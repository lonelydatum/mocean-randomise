import React, { Component } from 'react'

import Pie from './Pie'
import Line from './Line'
import {HocCharacter, MainCSS} from './Character'


class Character extends Component {
    render () {                
        const {size, color, timelineCharacter} = this.props
        return (
            <MainCSS align-items={'flex-end'} justify-content={`flex-end`} flex-direction={`column`} size={size}>
                <Line                    
                    tweenAmount={size}          
                    isVertical={true}
                    color={this.props.color}
                    timelineCharacter={timelineCharacter}
                    animationTime={this.props.animationTime}
                />   
                <Pie 
                    custom={{fourSquare:[[false, false], [true, true]], size}}
                    start={180}
                    tweenAmount={360}                    
                    color={color}
                    timelineCharacter={timelineCharacter}
                    animationTime={this.props.animationTime}
                />
                 
            </MainCSS>
        )
    }
}


export default HocCharacter(Character, 'J')