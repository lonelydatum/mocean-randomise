import React, { Component } from 'react'
import styled from 'styled-components'
import {HocCharacter, MainCSS} from './_util/Character'
import {Line, Pie, Rect, Hump} from './_util/Geo'


const gap = 55

class Character extends Component {
    render () {
        const {size, color, timelineCharacter} = this.props

        return (
            <MainCSSX {...this.props}>
                <Pie 
                    custom={{fourSquare:[[true, true], [false, false]], size: size*2}}
                    start={180+gap} 
                    tweenAmount={180-(gap*2)} 
                    {...this.props}
                />                                    
            </MainCSSX>
        )
    }
}

const ratioSmall = 12/150
const ratioBig = 22/150

const MainCSSX = styled(MainCSS)`
    /* margin-right: -${me=>me.size * ratioSmall}px; */
    /* margin-left: -${me=>me.size * ratioBig}px; */

    margin-right: ${me=>{
        const ratio = me.theme.letterspacing / me.theme.size
        return -me.size * ratio
    }}px;

    margin-left: ${me=>{
        const ratio = me.theme.letterspacing / me.theme.size
        return -me.size * ratio * 2
    }}px;
`


export default HocCharacter(Character, 'U')