import React, { Component } from 'react'
import styled from 'styled-components'
import {HocCharacter, MainCSS} from './_util/Character'
import {Line, Pie, Rect, Hump} from './_util/Geo'

class Character extends Component {
    render () {                
        const {size, color, timelineCharacter} = this.props
        return (
            <MainCSS align-items={'flex-end'}  {...this.props}>
                 <LineX                    
                    tweenAmount={size*1.5}          
                    isVertical={true}
                    {...this.props}
                />     
                <Hump size={size} {...this.props} un="n"/>                
            </MainCSS>
        )
    }
}


const LineX = styled(Line)`
    /* position: absolute; */
    left: 0;
`


export default HocCharacter(Character, 'D')