import React, { Component } from 'react'
import styled from 'styled-components'
import {HocCharacter, MainCSS} from './_util/Character'
import {Line, Pie, Rect, Hump} from './_util/Geo'


class Character extends Component {
    render () {                
        const {size, color, timelineCharacter} = this.props
        const total = size * 1
        const diag = Math.sqrt( (total*total) + (total*total) )
        
        return (
            <MainCSS flex-direction="column" {...this.props}>
                  <Pie 
                    custom={{fourSquare:[[false, false], [true, true]], size}}
                    start={0} 
                    tweenAmount={180} 
                    {...this.props}
                />       
                <Pie 
                    custom={{fourSquare:[[true, true], [false, false]], size}}
                    start={180} 
                    tweenAmount={180} 
                    {...this.props}
                />       
            </MainCSS>
        )
    }
}



// const LineDiagonal = styled(Line)`
//     position: absolute;
//     transform: translate(-50%, -50%) rotate(135deg);
//     transform-origin: 50% 50%;
//     top: 50%;
//     left: 50%;
// `


// const PieDiagonal = styled(Pie)`
//     position: absolute;
//     transform: translateY(-50%);
//     transform-origin: 50% 0%;
//     top: 50%;
//     /* left: 50%; */
// `


export default HocCharacter(Character, 'Z')