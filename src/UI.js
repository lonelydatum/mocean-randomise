import React, { Component } from 'react'
import styled from 'styled-components'
import { CirclePicker as Picker } from 'react-color'

import mq from './mq'
import Track from './Track'
import Share from './Share'
const colors = ['#ff6363', '#fdf090', '#c4f7b4', '#ffb8ff', '#ffffff', '#000000']
let autoWords = ['mocean', 'makes', 'words', 'expressive']
class componentName extends Component {

  constructor(props) {
		super(props);
		
		this.didBlur = this._didBlur.bind(this)		
  }
  
  _didBlur(){    
    if(autoWords.find(item=>item!==this.input.value)){
      Track('message', this.input.value)
    }
	}
    
    componentDidMount(){
      this.input.addEventListener('blur', this.didBlur, true);
      setTimeout(()=>{
				this.input.focus()
			}, 300)
    }

    render () {
        const {msg, handleChangeComplete, textChanged, animate} = this.props
        return (
            <UICSS>
          
           <Wrapper>
            <InputCSS       
              value={msg}
              placeholder="say something"
              innerRef={me=>this.input=me} 
              onChange={textChanged} />
            <button onClick={animate}>animate</button>
          </Wrapper>
          <Share word={msg}/>
          <PickerCSS     
           circleSize={18}   
           color="#333" 
           margin-bottom="2em"  
            width={'100%'}
            colors={ colors }
            onChangeComplete={ handleChangeComplete }
           />
           
          
        </UICSS>
        )
    }
}


const PickerCSS = styled('div')`
  margin-bottom: .2em !important;
  justify-content: center;
`.withComponent(Picker)


const Wrapper = styled('div')`
  display: flex;  
  margin: 0 .5em;
  margin-bottom: 1em;  
  ${mq.tablet`
    margin: 0 auto;
    /* box-shadow: 0 0 15px rgba(0,0,0,.2); */
    margin-bottom: 1em;
    max-width: 400px;
  `}
  button{
    border: none;
    background-color: #c4f7b5;
    font-size: 1em;
    color: #f121ca;
    /* font-weight: 900; */
    padding: .6em;
    cursor: pointer;
    font-family: ${me=>me.theme.font};
    /* font-family: 'Chivo', sans-serif; */
    ${mq.tablet`
      font-size: 1.6em;

    `}
    &:hover{
      background-color: #00ceff;
      color: white;
    }
  }
`


const InputCSS = styled('input')`
  display: block;
  width: 100%;
  border: none;
  font-size: 1.5em;
  padding: .5em;
  color: #f121ca;
  border-radius: 0;
  /* background: rgba(28, 56, 111, 1); */
  background-color: rgba(255, 255, 255, 0.5);
  font-family: ${me=>me.theme.font};
  &::placeholder {
    color: white;    
  }


  ${mq.tablet`
    font-size: 1.6em;
    padding: .5em 1em;
  `}
`

const UICSS = styled('div')`
display: block;
margin-bottom: 2em;
width: 100%;
/* border: 1px solid red; */
`
export default componentName