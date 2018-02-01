import React, { Component } from 'react'
import styled from 'styled-components'
import {HocCharacter, MainCSS} from './_util/Character'
import {Line, Pie, Rect, Hump} from './_util/Geo'

class Character extends Component {
    render () {      
        const {size, color, timelineCharacter} = this.props        
        return (
            <MainCSS flex-direction={`column`} align-items={`flex-start`} justify-content={`flex-end`} {...this.props}>
                <Pie 
                    custom={{fourSquare:[[true, true], [false, false]], size}}
                    start={180}
                    tweenAmount={360}                    
                    {...this.props}
                />

                <Line                    
                    tweenAmount={size}          
                    isVertical={true}
                    {...this.props}
                />     

                {/* <LineHorizontal
                    tweenAmount={90}          
                    isVertical={false}
                    color={this.props.color}
                    timeline={{tl:timelineCharacter, delay:'+=.1'}}
                />      */}
                
            </MainCSS>
        )
    }
}

const LineHorizontal = styled('canvas')`
    position: absolute;
    top: 70%;
    transform: translateX(-50%);
`.withComponent(Line)


export default HocCharacter(Character, 'd')