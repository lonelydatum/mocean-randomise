import React, { Component } from 'react'
import styled from 'styled-components'
import {HocCharacter, MainCSS} from './_util/Character'
import {Line, Pie, Rect, Hump} from './_util/Geo'

class Character extends Component {
    render () {                
        const {size, color, timelineCharacter} = this.props
        
        
        return (
            <MainCSSX flex-direction={`column`} {...this.props}>  
                <Top>
                    <Pie 
                        custom={{fourSquare:[[true, true], [true, true]], size}}
                        start={0}
                        tweenAmount={360}                    
                        {...this.props}                    
                    />
                    <Line                    
                        tweenAmount={size*1}          
                        isVertical={true}
                        {...this.props}
                        animationTime={this.props.animationTime*.5}
                    />   
                </Top>
                
                <PieX 
                    nofill={true}
                    custom={{fourSquare:[[false, false], [true, true]], size:size*.9}}
                    start={0}
                    tweenAmount={150} 

                    {...this.props}   
                    delay={this.props.animationTime*.45}
                    // animationTime={8}                 
                /> 

            </MainCSSX>
        )
    }
}

const Top = styled('div')`
    display: flex;
`

const PieX = styled(Pie)`
    /* position: absolute;
    bottom: 0;
    right: -2px; */
    transform: translateX(1.5px);
`

const MainCSSX = styled(MainCSS)`
    top: ${me=>me.size*.25}px;
    /* border: 1px solid red; */
    height: ${me=>me.size*.75}px;
`


export default HocCharacter(Character, '')