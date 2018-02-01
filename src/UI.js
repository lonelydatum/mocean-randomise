import React, { Component } from 'react'
import styled from 'styled-components'
import { CirclePicker as Picker } from 'react-color'



class componentName extends Component {
    render () {
        const {msg, handleChangeComplete, textChanged, animate} = this.props
        return (
            <UICSS>
           <PickerCSS           
            color={ 'red' }
            onChangeComplete={ handleChangeComplete }
           />
           <Wrapper>
            <InputCSS 
              value={msg}
              placeholder="say something"
              innerRef={me=>this.input=me} 
              onChange={textChanged} />
            <button onClick={animate}>animate</button>
          </Wrapper>
          
        </UICSS>
        )
    }
}


const PickerCSS = styled('div')`
  width: 100% !important;
  margin-bottom: 2em !important;
  justify-content: center;
`.withComponent(Picker)


const Wrapper = styled('div')`
  display: flex;

  button{
    border: none;
    background-color: #128ff3;
    font-size: 2em;
    color: white;
    font-weight: 900;
    padding: .6em;
    cursor: pointer;
    font-family: 'Montserrat Alternates', sans-serif;
    &:hover{
      background-color: #00ceff;
    }
  }
`


const InputCSS = styled('input')`
  display: block;
  width: 100%;
  border: none;
  font-size: 3em;
  padding: .5em;
  color: #128ef3;
  background: rgba(0,0,0,.1);
  font-family: 'Montserrat Alternates', sans-serif;
`

const UICSS = styled('div')`
display: block;
`
export default componentName