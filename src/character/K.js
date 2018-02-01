import React, { Component } from 'react'
import styled from 'styled-components'
import {HocCharacter, MainCSS} from './_util/Character'
import {Line, Pie, Rect, Hump} from './_util/Geo'


class Character extends Component {
    render () {                
        const {size, color, timelineCharacter} = this.props
        const amount = 130
        const half = amount / 2
        return (
            <MainCSS {...this.props}>
                 <Line                    
                    tweenAmount={size*1.5}          
                    isVertical={true}
                    {...this.props}
                />     
                <Pie 
                    custom={{fourSquare:[[false, true], [false, true]], size}}
                    start={360-half}
                    tweenAmount={amount}                    
                    {...this.props}
                />
            </MainCSS>
        )
    }
}


export default HocCharacter(Character, 'K')