import React, { Component } from 'react'
import styled from 'styled-components'
import radians from 'degrees-radians'
import PropTypes from 'prop-types'
import HocAnatomy from './HocAnatomy'


class Character extends Component {

    constructor(p){
        super(p)
        const {width, tweenAmount} = this.props
        this.canvasWidth = width
        this.canvasHeight = tweenAmount
    }

    _draw(){
        this.ctx.fillStyle = this.props.color
        this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight)
        this.ctx.beginPath()
        this.ctx.rect(0, 0, this.props.width, this.props.tween)
        this.ctx.fill();
    }

    componentDidMount() {
        this.ctx = this.canvas.getContext("2d")
        this._draw()
        this.props.animate()
    }   

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.tween !== this.props.tween){
            this._draw()    
        }
        if(prevProps.color!==this.props.color){                
            this._draw()                        
        }
    }

    render () {        
        return (
            <CanvasCSS 
                className={this.props.className}
                innerRef={me=>this.canvas=me} 
                width={this.canvasWidth} 
                height={this.canvasHeight} 
            />            
        )
    }
}

const CanvasCSS = styled('canvas')`
    width:${me=>me.width/2}px;
    height:${me=>me.height/2}px;
`

export default HocAnatomy(Character)

