import React, { Component } from 'react'

import Pie from './Pie'
import Line from './Line'
import {HocCharacter, MainCSS} from './Character'


const gap = 45

class Character extends Component {
    render () {
        const {size, color, timelineCharacter} = this.props

        return (
            <MainCSS size={size}>
                <Pie 
                    custom={{fourSquare:[[true, true], [false, false]], size: size*2}}
                    start={180+gap} 
                    tweenAmount={180-(gap*2)} 
                    color={color}                   
                    timelineCharacter={timelineCharacter}
                    animationTime={this.props.animationTime}
                />                                    
            </MainCSS>
        )
    }
}


export default HocCharacter(Character, 'U')