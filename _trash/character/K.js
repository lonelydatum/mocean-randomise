import React, { Component } from 'react'

import Pie from './Pie'
import Line from './Line'
import {HocCharacter, MainCSS} from './Character'


class Character extends Component {
    render () {                
        const {size, color, timelineCharacter} = this.props
        const amount = 130
        const half = amount / 2
        return (
            <MainCSS size={size}>
                 <Line                    
                    tweenAmount={size*1.5}          
                    isVertical={true}
                    color={this.props.color}
                    timelineCharacter={timelineCharacter}
                    animationTime={this.props.animationTime}
                />     
                <Pie 
                    custom={{fourSquare:[[false, true], [false, true]], size}}
                    start={360-half}
                    tweenAmount={amount}                    
                    color={color}
                    timelineCharacter={timelineCharacter}
                    animationTime={this.props.animationTime}
                />
            </MainCSS>
        )
    }
}


export default HocCharacter(Character, 'K')