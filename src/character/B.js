import React, { Component } from 'react'
import styled from 'styled-components'
import {HocCharacter, MainCSS} from './_util/Character'
import {Line, Pie, Rect, Hump} from './_util/Geo'

class Character extends Component {
    render () {                
        const {size, color, tl, timelineCharacter, animationTime, space} = this.props
        
        return (
            <MainCSS {...this.props}>
                 <Line                    
                    tweenAmount={size*1.5}          
                    isVertical={true}
                    {...this.props}
                />     
                <Pie 
                    custom={{fourSquare:[[true, true], [true, true]], size}}
                    start={0}
                    tweenAmount={360}                    
                    {...this.props}
                />
            </MainCSS>
        )
    }
}



export default HocCharacter(Character, 'B')