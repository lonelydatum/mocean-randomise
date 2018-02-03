import React, { Component } from 'react'
import styled from 'styled-components'
import radians from 'degrees-radians'
import PropTypes from 'prop-types'
import HocAnatomy from './HocAnatomy'


class Character extends Component {

    constructor(p){
        super(p)
        
        const {thick, tweenAmount, isVertical, timeline} = this.props
        
        if(isVertical){
            this.canvasWidth = thick
            this.canvasHeight = tweenAmount
            this._drawDirection = this._drawVertical
        }else{
            this.canvasWidth = tweenAmount
            this.canvasHeight = thick
            this._drawDirection = this._drawHorizontal
        }
    }

    static defaultProps = {
        thick: window.innerWidth<768 ? 4 : 6,
    }

    _drawVertical(){
        this.ctx.rect(0, 0, this.props.thick, this.props.tween)
    }

    _drawHorizontal(){
        this.ctx.rect(0, 0, this.props.tween, this.props.thick)
    }

    _draw(){
        this.ctx.fillStyle = this.props.color        
        this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight)
        this.ctx.beginPath()
        this._drawDirection()
        this.ctx.fill();
    }

    componentDidMount() {
        const {thick, tweenAmount, isVertical, timeline} = this.props        
        this.ctx = this.canvas.getContext("2d")
        // this._draw()
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
    /* border: 1px solid blue; */
    /* transform: scale(.5);
    transform-origin: 0 0; */
`

export default HocAnatomy(Character)

