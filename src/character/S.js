import React, { Component } from 'react'
import styled from 'styled-components'
import {HocCharacter, MainCSS} from './_util/Character'
import {Line, Pie, Rect, Hump} from './_util/Geo'


class Character extends Component {
    render () {                
        const {size, color, timelineCharacter} = this.props
        return (
            <MainCSS flex-direction={`column`} justify-content={`flex-end`} {...this.props}>
                 <PieTop
                    size={size}
                    custom={{fourSquare:[[true, true], [false, false]], size}}
                    start={180}
                    tweenAmount={180}                    
                    {...this.props}
                /> 
                <PieBottom
                    size={size}
                    custom={{fourSquare:[[false, false], [true, true]], size}}
                    start={0}
                    tweenAmount={180}                    
                    {...this.props}
                />
            </MainCSS>
        )
    }
}

const ratio = 10/100

const diff = 16

const PieTop = styled(Pie)`
    margin-left: ${me=>me.size*ratio}px;
`

const PieBottom = styled(Pie)`
    margin-right: ${me=>me.size*ratio}px;
`


export default HocCharacter(Character, 'S')