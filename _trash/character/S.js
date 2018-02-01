import React, { Component } from 'react'
import styled from 'styled-components'
import Pie from './Pie'
import Line from './Line'
import {HocCharacter, MainCSS} from './Character'


class Character extends Component {
    render () {                
        const {size, color, timelineCharacter} = this.props
        return (
            <MainCSS flex-direction={`column`} justify-content={`flex-end`} size={size}>
                 <PieTop
                    custom={{fourSquare:[[true, true], [false, false]], size}}
                    start={180}
                    tweenAmount={180}                    
                    color={color}
                    timelineCharacter={timelineCharacter}
                    animationTime={this.props.animationTime}
                /> 
                <PieBottom
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

const diff = 16

const PieTop = styled(Pie)`
    margin-left: ${diff}px;
`

const PieBottom = styled(Pie)`
    margin-right: ${diff}px;
`


export default HocCharacter(Character, 'S')