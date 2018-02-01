import React, { Component } from 'react'
import styled from 'styled-components'
import {HocCharacter, MainCSS} from './_util/Character'
import {Line, Pie, Rect, Hump} from './_util/Geo'

class Character extends Component {
    render () {
        const {size, color, timelineCharacter} = this.props

        return (
            <MainCSS {...this.props}>
                <Pie 
                    custom={{fourSquare:[[true, true], [true, true]], size}}
                    start={10} 
                    tweenAmount={340} 
                    {...this.props}
                />                     
            </MainCSS>
        )
    }
}


export default HocCharacter(Character, 'C')