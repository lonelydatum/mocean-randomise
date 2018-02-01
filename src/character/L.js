import React, { Component } from 'react'
import styled from 'styled-components'
import {HocCharacter, MainCSS} from './_util/Character'
import {Line, Pie, Rect, Hump} from './_util/Geo'

class Character extends Component {
    render () {                
        const {size, color, timelineCharacter} = this.props
        return (
            <MainCSS align-items={'center'} justify-content={`flex-end`} flex-direction={`column`} {...this.props}>
                 <Line                    
                    tweenAmount={size*1.5}          
                    isVertical={true}
                    {...this.props}
                />     
                
            </MainCSS>
        )
    }
}

const PieCSS = styled(`canvas`)`
    margin-bottom: 18px;
`.withComponent(Pie)



export default HocCharacter(Character, 'd')