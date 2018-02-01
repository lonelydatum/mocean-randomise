import React, { Component } from 'react'
import styled from 'styled-components'
import {HocCharacter, MainCSS} from './_util/Character'
import {Line, Pie, Rect, Hump} from './_util/Geo'

class Character extends Component {
    render () {
        const {size, color, timelineCharacter, animationTime} = this.props

        return (
            <MainCSS {...this.props}>
                <Hump {...this.props} un="u" />
                <Hump {...this.props} un="u" delay={animationTime*.5}/>
            </MainCSS>
        )
    }
}




const LineX = styled(Line)`
    position: absolute;
    left: 0;
`


export default HocCharacter(Character, 'W')