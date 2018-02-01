import React, { Component } from 'react';
import styled from 'styled-components'
import {TimelineMax, Back} from 'gsap'

import A from './character/A'
import B from './character/B'
import C from './character/C'
import D from './character/D'
import E from './character/E'
import F from './character/F'
import G from './character/G'
import H from './character/H'
import I from './character/I'
import J from './character/J'
import K from './character/K'
import L from './character/L'
import M from './character/M'
import N from './character/N'
import O from './character/O'
import P from './character/P'
import Q from './character/Q'
import R from './character/R'
import S from './character/S'
import T from './character/T'
import U from './character/U'
import V from './character/V'
import W from './character/W'
import X from './character/X'
import Y from './character/Y'
import Z from './character/Z'

const letter = {
    A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, W, X, Y, Z
}


class App extends Component {
    constructor(p){
        super(p)
        this.tl = new TimelineMax({onComplete:this.props.onDone})
    }

    _stringToComponent(word){
        const {size, color, animationSequence, animationTime} = this.props
        const tl = animationSequence ? this.tl : undefined
        
        const letters = word.split('').map((item, index)=>{
            const ITEM = item.toUpperCase()    
            const Letter = letter[ITEM]
            return < Letter
                color={color || undefined}
                animationTime={animationTime || undefined}
                key={index} 
                tl={tl}
                size={size || undefined}
            />
        })  
        return letters
    }


    render() {        
        const {message, timelineMax} = this.props
        return  (
        <MainCSS>
            {this._stringToComponent(message)}
        </MainCSS>
    )    
  } 
}

App.defaultProps = {
    animationSequence: false,
    color: '#FF00FF'
}

const MainCSS = styled('div')`
  display:flex;
  align-items: flex-end; 
  /* margin: 22px; */
  flex-wrap: wrap;
`

export default App;
