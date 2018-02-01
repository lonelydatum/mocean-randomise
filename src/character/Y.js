import React, { Component } from 'react'
import styled from 'styled-components'
import {HocCharacter, MainCSS} from './_util/Character'
import {Line, Pie, Rect, Hump} from './_util/Geo'


class Character extends Component {
    render () {                
        const {size, color, timelineCharacter} = this.props
        return (
            <MainCSSX align-items={`flex-start`} {...this.props}>
                 
                 <Hump {...this.props} un="u" />                    
                <Line                    
                    tweenAmount={size*1.5}          
                    isVertical={true}
                    {...this.props}
                />     
            </MainCSSX>
        )
    }
}



const MainCSSX = styled(MainCSS)`
    top: ${me=>me.size*.25}px;
`


export default HocCharacter(Character, 'P')