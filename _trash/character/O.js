import React, { Component } from 'react'

import Pie from './Pie'
import {HocCharacter, MainCSS} from './Character'

class Character extends Component {
    render () {
        const {size, color, timelineCharacter} = this.props

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
            </MainCSS>
        )
    }
}


export default HocCharacter(Character, 'O')