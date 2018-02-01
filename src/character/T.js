import React, { Component } from 'react'
import styled from 'styled-components'
import {HocCharacter, MainCSS} from './_util/Character'
import {Line, Pie, Rect, Hump} from './_util/Geo'

class Character extends Component {
    render () {                
        const {size, color, timelineCharacter, animationTime} = this.props
        const widhtRatio = 1
        return (
            <MainCSS flex={`block`} width={`${size*widhtRatio*.5}px`} height={`${size*1.5*.5}px`} {...this.props}>
                 <LineTop                    
                    tweenAmount={size*1.5}          
                    isVertical={true}
                    {...this.props}
                    animationTime={animationTime*.8}
                />    

                <PieHor 
                    custom={{fourSquare:[[false, false], [true, true]], size:size*widhtRatio}}
                    start={0} 
                    tweenAmount={180} 
                    {...this.props}
                    animationTime={animationTime*.5}
                />    
                 

                {/* <LineBottom                
                    tweenAmount={size*.5}          
                    isVertical={false}
                    color={this.props.color}
                    timelineCharacter={timelineCharacter}
                />      */}
                
            </MainCSS>
        )
    }
}

const LineTop = styled(Line)`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
`

const PieHor = styled(Pie)`    
    position: absolute;
    top: 0%;
    transform: translateY(100%);
`

const LineBottom = styled(Line)`    
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
`



export default HocCharacter(Character, 'd')