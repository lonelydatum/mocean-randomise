import React, { Component } from 'react'

import Pie from './Pie'
import Line from './Line'
import {HocCharacter, MainCSS} from './Character'

class Character extends Component {
    render () {
        const {size, color, timelineCharacter} = this.props

        return (
            <MainCSS size={size}>
                <Line                    
                    tweenAmount={size*.5}          
                    isVertical={true}
                    color={this.props.color}
                    timelineCharacter={timelineCharacter}
                    animationTime={this.props.animationTime/3}
                />     
                <Pie 
                    custom={{fourSquare:[[true, true], [false, false]], size}}
                    start={180} 
                    tweenAmount={360} 
                    color={color}                   
                    timelineCharacter={timelineCharacter}
                    animationTime={this.props.animationTime/3}
                />     
                <Pie 
                    custom={{fourSquare:[[true, true], [false, false]], size}}
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


export default HocCharacter(Character, 'M')