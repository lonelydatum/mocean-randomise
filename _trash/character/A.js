import React, { Component } from 'react'

import Pie from './Pie'
import Line from './Line'
import {HocCharacter, MainCSS} from './Character'

class Character extends Component {
    render () {                
        const {size, color, animationTime, timelineCharacter} = this.props
        
        return (
            <MainCSS size={size}>
                 
                <Pie 
                    custom={{fourSquare:[[true, true], [true, true]], size}}
                    start={0}
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
            </MainCSS>
        )
    }
}



export default HocCharacter(Character, 'A')