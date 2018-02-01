import React, { Component } from 'react'

import Pie from './Pie'
import Line from './Line'
import {HocCharacter, MainCSS} from './Character'

class Character extends Component {
    render () {
        const {size, color, timelineCharacter} = this.props

        return (
            <MainCSS size={size}>     
                <Pie 
                    custom={{fourSquare:[[false, false], [true, true]], size}}
                    start={0} 
                    tweenAmount={180} 
                    color={color}                   
                    timelineCharacter={timelineCharacter}
                    animationTime={this.props.animationTime}
                />     
                <Pie 
                    custom={{fourSquare:[[false, false], [true, true]], size}}
                    start={0} 
                    tweenAmount={180} 
                    color={color}                   
                    timelineCharacter={timelineCharacter}
                    animationTime={this.props.animationTime}
                />                      
            </MainCSS>
        )
    }
}


export default HocCharacter(Character, 'M')