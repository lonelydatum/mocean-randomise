import React, { Component } from 'react'
import styled from 'styled-components'

import Pie from './Pie'
import Line from './Line'
import {HocCharacter, MainCSS} from './Character'

class Character extends Component {
    render () {                
        const {size, color, timelineCharacter} = this.props
        return (
            <MainCSS align-items={'center'} justify-content={`flex-end`} flex-direction={`column`} size={size}>
                 <Line                    
                    tweenAmount={size*1.5}          
                    isVertical={true}
                    color={this.props.color}
                    timelineCharacter={timelineCharacter}
                    animationTime={this.props.animationTime}
                />     
                
            </MainCSS>
        )
    }
}

const PieCSS = styled(`canvas`)`
    margin-bottom: 18px;
`.withComponent(Pie)



export default HocCharacter(Character, 'd')