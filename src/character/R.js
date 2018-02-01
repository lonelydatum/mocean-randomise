import React, { Component } from 'react'
import styled from 'styled-components'
import {HocCharacter, MainCSS} from './_util/Character'
import {Line, Pie, Rect, Hump} from './_util/Geo'


class Character extends Component {
    render () {                
        const {size, color, timelineCharacter} = this.props
        return (
            <MainCSS align-items={`flex-start`} {...this.props}>
                 <Line                    
                    tweenAmount={size}          
                    isVertical={true}
                    {...this.props}
                />     
                <Pie 
                    custom={{fourSquare:[[true, true], [false, false]], size}}
                    start={180}
                    tweenAmount={360}                    
                    {...this.props}
                />
            </MainCSS>
        )
    }
}


export default HocCharacter(Character, 'R')