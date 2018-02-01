import React, { Component } from 'react';
import styled from 'styled-components'
import {TimelineMax, Back} from 'gsap'

import PieFont from './PieFont'



class App extends Component {

  _onDone(){
    console.log('done');
  }
  
  render() {
    return  (
      <MainCSS>
        <PieFont
          // animationSequence={true}          
          animationTime={1}
          message={'randomise'}
          size={150}
          onDone={this._onDone.bind(this)}
          color={'#FF0000'}
        />
      </MainCSS>
    )    
  } 
}

const MainCSS = styled('div')`
  display:flex;
  align-items: flex-end; 
  /* margin: 22px; */
  flex-wrap: wrap;
  
  border: 1px solid red;
  
`

export default App;
