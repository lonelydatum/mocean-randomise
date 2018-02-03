import React, { Component } from 'react'
import styled from 'styled-components'
import {HocCharacter, MainCSS} from './_util/Character'
import {Line, Pie, Rect, Hump} from './_util/Geo'

const ratio = 15/150

class Character extends Component {
    render () {                
        const {size, color, timelineCharacter} = this.props
        return (
            <MainCSSX align-items={'flex-end'} justify-content={`flex-end`} flex-direction={`column`} {...this.props}>
                <PieCSS 
                    size={size}
                    custom={{fourSquare:[[true, true], [true, true]], size:ratio*size}}
                    start={0}
                    tweenAmount={360}                    
                    {...this.props}
                />
                <Line                    
                    tweenAmount={size}          
                    isVertical={true}
                    {...this.props}
                />   
                <Pie                                         
                    custom={{fourSquare:[[false, false], [true, true]], size}}
                    start={0} 
                    tweenAmount={180}
                    {...this.props}
                />   
                 
            </MainCSSX>
        )
    }
}

const MainCSSX = styled(MainCSS)`
    top: ${me=>me.size*.25}px;
`

// const ratioMargin = 18/100
const PieCSS = styled(`canvas`)`
    margin-bottom: ${
        me=>{
            const ratio = 20/me.size
            return me.size*ratio
        }
    }px;
    transform: translateX(25%);
`.withComponent(Pie)


export default HocCharacter(Character, 'J')