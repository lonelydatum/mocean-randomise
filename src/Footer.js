import React, { Component } from 'react'
import styled from 'styled-components'

import Track from './Track'
import mq from './mq'


class componentName extends Component {
    render () {
        return (
            <MainCSS>
                <Content>
                    <span>Expression: The process of making known one's thoughts or feelings.</span><br/>

                    Using code to create fonts gives an incredible amount of control with animations but has limitations along the way. 
                    This PIE CHART font was created by me, <a target="_blank" onClick={()=>Track('goto', 'lonelydatum')} href="http://lonelydatum.com">Gar Liu</a> and was recently used for an app called <a target="_blank" onClick={()=>Track('goto', 'randomise')} href="https://randomise.me">randomise.me</a>. 
                    I am working on building a collection of fonts that developers can access an api to control animations and styles. 
                    My goal is to have the fonts published on npm by the end of February 2018. Message me at <a target="_blank"  onClick={()=>Track('goto', 'twitter')} href="https://twitter.com/lonelydatum">@lonelydatum</a> if you are interested in this project!
                </Content>

                
                
            </MainCSS>
        )
    }
}

const Content = styled('p')`
    margin: 0 auto;
    /* margin-bottom: 2em; */
    max-width: 900px;
    
`

const MainCSS = styled('div')`
    padding: .8em;    
    line-height: 1.5em;
    /* color: rgba(0,0,0,.8); */
    color: #8a8352;
    font-family: 'Chivo', sans-serif;
    background-color: rgba(255, 255, 255, .72);
    /* border: 1px solid red; */

    ${mq.tablet`
        padding: 1.3em;    
    `}

    span{
        font-style: italic;
    }
`

export default componentName