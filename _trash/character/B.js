import React, { Component } from 'react'

import Pie from './Pie'
import Line from './Line'
import {HocCharacter, MainCSS} from './Character'

class Character extends Component {
    render () {                
        const {size, color, tl, timelineCharacter} = this.props
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
                    custom={{fourSquare:[[true, true], [true, true]], size}}
                    start={0}
                    tweenAmount={360}                    
                    color={color}
                    timelineCharacter={timelineCharacter}
                    animationTime={this.props.animationTime}
                />
            </MainCSS>
        )
    }
}



export default HocCharacter(Character, 'B')