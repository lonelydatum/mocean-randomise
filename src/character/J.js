import React, { Component } from 'react'
import styled from 'styled-components'
import {HocCharacter, MainCSS} from './_util/Character'
import {Line, Pie, Rect, Hump} from './_util/Geo'


class Character extends Component {
    render () {                
        const {size, color, timelineCharacter} = this.props
        return (
            <MainCSS align-items={'flex-end'} justify-content={`flex-end`} flex-direction={`column`} {...this.props}>
                <Line                    
                    tweenAmount={size/2}          
                    isVertical={true}
                    {...this.props}
                />   
                <Hump {...this.props} un="u" />
                 
            </MainCSS>
        )
    }
}


export default HocCharacter(Character, 'J')