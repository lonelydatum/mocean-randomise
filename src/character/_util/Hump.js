import React, { Component } from 'react'
import styled from 'styled-components'
import {Line, Pie, Rect} from './Geo'

class componentName extends Component {
    render () {
        const {size, un, animationTime, delay} = this.props
        const fourSquare = un==='u' ? [[false, false], [true, true]] : [[true, true], [false, false] ]
        
        const time = this.props.animationTime/2
        
        
        return (
            <Hump un={un}>
                <Rect 
                    width={size} 
                    tweenAmount={size/2} 
                    delay={un==="u"?0:time*.9}
                    {...this.props}
                    animationTime={time}
                /> 
                <Pie                                         
                    custom={{fourSquare, size}}
                    start={un==='u'?0:180} 
                    tweenAmount={180}
                    delay={un==="u"?time*.9:0}
                    {...this.props}
                    animationTime={time}
                />                    
            </Hump>    
        )
    }
}


const Hump = styled('div')`
    display: flex;
    flex-direction: ${me=>me.un==="u"?'column':'column-reverse'};
    canvas{
        display: block;
    }
`

export default componentName