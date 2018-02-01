import React, { Component } from 'react'
import styled from 'styled-components'
import {HocCharacter, MainCSS} from './_util/Character'
import {Line, Pie, Rect, Hump} from './_util/Geo'


class Character extends Component {
    render () {
        const {size, color, timelineCharacter} = this.props

        return (
            <MainCSS {...this.props}>
                <LineX                    
                    tweenAmount={size}          
                    isVertical={true}
                    {...this.props}
                />     
            <Hump {...this.props} un="n" />
                
            </MainCSS>
        )
    }
}




const LineX = styled(Line)`
    position: absolute;
    left: 0;
    /* display: none; */
    
   
`


export default HocCharacter(Character, 'M')