import React, { Component } from 'react'
import styled from 'styled-components'
import {HocCharacter, MainCSS} from './_util/Character'
import {Line, Pie, Rect, Hump} from './_util/Geo'


class Character extends Component {
    render () {                
        const {size, color, timelineCharacter, animationTime} = this.props
        return (
            <MainCSS align-items={`flex-start`} {...this.props}>
                  
                <Pie 
                    custom={{fourSquare:[[false, true], [false, true]], size}}
                    start={270}
                    tweenAmount={180}                    
                    {...this.props}
                />
                 <Pie 
                    custom={{fourSquare:[[true, false], [true, false]], size}}
                    start={90}
                    tweenAmount={180}                    
                    {...this.props}
                    animationTime={animationTime*1.3}
                />
            </MainCSS>
        )
    }
}


export default HocCharacter(Character, 'x')