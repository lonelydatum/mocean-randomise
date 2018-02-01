import React, { Component } from 'react';

import PieFont from './PieFont'
import styled from 'styled-components'

import UI from './UI'
import Footer from './Footer'



class App extends Component {

  state={
    msg:'randomise', 
    color: 'rgb(96, 125, 139)',
    animateInc: 0
  }

  _onDone(){
    // console.log('done');
  }

  _textChanged(e){
    console.log();
    
    const rawValue = e.target.value
    this.setState({msg:rawValue});
  }

  _animate(){
    this.setState({animateInc:this.state.animateInc+1})
    // this.setState({color: 'blue'})
  }

  _validate(){

  }

  _handleChangeComplete(color){
    this.setState({color:color.hex});    
  }
  
  render() {
    const {msg, animateInc, color} = this.state
    console.log(color);
    
    return  (
      <MainCSS>
         <UI 
         animate={this._animate.bind(this)}
          msg={msg}
          textChanged={this._textChanged.bind(this)}
          handleChangeComplete={this._handleChangeComplete.bind(this)}
          />
        <PieFont
          // animationSequence={true}          
          animateInc={animateInc}
          animationTime={1}
          message={msg}
          size={150}
          onDone={this._onDone.bind(this)}
          color={this.state.color}
        />
       
        <Footer/>
      </MainCSS>
    )    
  } 
}




const MainCSS = styled('div')`
  font-family: 'Montserrat Alternates', sans-serif;
  padding: 3em 2em;
`

export default App;
