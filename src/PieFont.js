import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components'
import {TimelineMax, Back} from 'gsap'
import theme from './character/_util/theme'

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
    a:A, b:B, c:C, d:D, e:E, f:F, g:G, h:H, i:I, j:J, k:K, l:L, m:M, n:N, o:O, p:P, q:Q, r:R, s:S, t:T, u:U, v:V, w:W, x:X, y:Y, z:Z
}





class App extends Component {
    constructor(p){
        super(p)
        this.tl = new TimelineMax({onComplete:this.props.onDone})
        this.tl.delay(.5)
        this.lettersComp
        // this.state={letters:[]}
    }

    

    _stringToComponent(word){
        const {size, color, animationSequence, animationTime, animateInc} = this.props
        
        if(animationSequence){
            // this.tl.delay(0)
        }
        
        let spaceIndex = -1

        this.lettersComp = word.split('').map((item, index)=>{
            const ITEM = item.toLowerCase()    
            const Letter = letter[ITEM]
            if(item===' '){
                spaceIndex = index
            }

            

            
            
            
            
            if(Letter){
                // console.log(item, index, spaceIndex);
                const hasSpace = spaceIndex>=0
                const result = < Letter
                    space={hasSpace||undefined}
                    animateInc={animateInc}
                    color={color || undefined}
                    animationTime={animationTime || undefined}
                    key={index}
                    tl={this.tl}
                    size={size || undefined}
                />

                if(hasSpace){
                    spaceIndex = -1
                }

                return result
            }
        })  
        
        
        return this.lettersComp
    }


    render() {        
        const {message} = this.props
        return  (
        
            <MainCSS className={this.props.className} size={this.props.size}>
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
  /* height: ${me=>me.size||150}px; */
  /* border: 1px solid red; */
  flex-wrap: wrap;
  margin-bottom: ${me=>me.size*.5||75}px;
`


export {App as default, letter};
