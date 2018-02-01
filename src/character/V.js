import React, { Component } from 'react'
import styled from 'styled-components'
import {HocCharacter, MainCSS} from './_util/Character'
import {Line, Pie, Rect, Hump} from './_util/Geo'


const gap = 45

class Character extends Component {
    render () {
        const {size, color, timelineCharacter} = this.props

        return (
            <MainCSS {...this.props}>
                <Pie 
                    custom={{fourSquare:[[true, true], [false, false]], size: size*2}}
                    start={180+gap} 
                    tweenAmount={180-(gap*2)} 
                    {...this.props}
                />                                    
            </MainCSS>
        )
    }
}


export default HocCharacter(Character, 'U')