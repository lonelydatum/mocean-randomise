import React, { Component } from 'react';

import PieFont from './PieFont'
import styled, {ThemeProvider} from 'styled-components'
import mq from './mq'
import UI from './UI'
import Footer from './Footer'
import Track from './Track'
import queryString from 'query-string'
import Share from './Share'
import theme from './character/_util/theme'


// let hasInteracted = false
let hasInteracted = true
let interval
let autoWordsIndex = 0
let autoWords = ['makes', 'words', 'expressive']
let wallpapers = ['ocean', 'vw', 'waves']

let hashMessage = window.location.hash.substr(1);

hashMessage = decodeURI(hashMessage)


class App extends Component {
  state={
    msg: hashMessage || 'mocean', 
    color: '#fdf090',
    screenWidth: window.innerWidth,
    animateInc: 0    
  }

  componentDidMount(){
    

    interval = setInterval(()=>{
      const hasWordsLeft = autoWordsIndex<=autoWords.length-1            
      if(hasWordsLeft && !hasInteracted && hashMessage.length===0){
        const word = autoWords[autoWordsIndex]
        autoWordsIndex++
        this.setState({msg:word})        
      }else{
        window.clearInterval(interval)      
      }
    }, 4000)
  }

  _textChanged(e){
    hasInteracted = true
    window.clearInterval(interval)
    const rawValue = e.target.value
    window.location.hash = rawValue;
    this.setState({msg:rawValue});
  }

  _animate(){
    window.clearInterval(interval)      
    this.setState({animateInc:this.state.animateInc+1})
    Track('animate-button', this.state.msg)
  }

  _handleChangeComplete(color){
    Track('color')
    this.setState({color:color.hex});    
  }
  
  render() {    
    const {msg, animateInc, color} = this.state    
    const ratio = 180 / 900
    const maxInnerwidth = Math.min(window.innerWidth, 1200)
    let size = maxInnerwidth * ratio
    console.log(size);
    
    // size = Math.min(size, 200)
    return  (
      <ThemeProvider theme={theme}>
      <MainCSS>
        
         <AppCSS>
         <PieFontCSS
          // animationSequence={true}          
          animateInc={animateInc}
          animationTime={1}
          message={msg}
          size={size}          
          color={this.state.color}
        />
            <UI 
              animate={this._animate.bind(this)}
              msg={msg}
              textChanged={this._textChanged.bind(this)}
              handleChangeComplete={this._handleChangeComplete.bind(this)}
            />
            
           </AppCSS>
       
        <Footer/>
      </MainCSS>
      </ThemeProvider>
    )    
  } 
}

const PieFontCSS = styled(PieFont)`
  justify-content: center;
  opacity: .8;
  margin-bottom: 2.5em;  
  min-height: ${me=>me.size}px;
  min-width: 100%;

  ${mq.tablet`
    min-width: 500px;
  `}
  /* background-color: #ff8a65; */


`

const AppCSS = styled('div')`
  min-height: 85vh;
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const MainCSS = styled('div')`
  font-family: 'Montserrat Alternates', sans-serif;
  padding: 1em 0em;
  background-image: url(./wallpaper/${wallpapers[2]}_.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  /* background-blend-mode: lighten; */
  background-color: rgba(255, 255, 255, 0.6);
  /* height: 100%; */
  /* display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center; */
  
  ${mq.tablet`
    padding: 3em 2em;
    background-image: url(./wallpaper/${wallpapers[2]}.jpg);
  `}
`

export default App;
