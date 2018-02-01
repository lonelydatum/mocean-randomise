import React, { Component } from 'react'
import styled from 'styled-components'
import radians from 'degrees-radians'
import PropTypes from 'prop-types'
import HocAnatomy from './HocAnatomy'

const INCREMNET = {w:.5, h:.5}
class Pie extends Component {
    constructor(p){
        super(p)        
        
        const {size, fourSquare} = this.props.custom
        this.radius = size / 2        
        const ratio = this._getRatio(fourSquare)       
        this.canvasSize = {
            width: ratio.size.w * size, 
            height: ratio.size.h * size
        }
        
        if(ratio.size.w<1){
            this.x = (ratio.start.x === .5) ? 0 : this.canvasSize.width
        }else{
            this.x = size * .5                
        }

        if(ratio.size.h<1){
            this.y = (ratio.start.y === .5) ? 0 : this.canvasSize.height
        }else{
            this.y = size * .5
        }
    }

    _getRatio(fourSquare){
        const ratio = {
            start: null,
            end: {x:0, y:0},
            size: {w:0, h:0}
        }
                
        fourSquare.map((rowItem, y)=>{
            return rowItem.map((cell, x)=>{
                if(cell){                    
                    if(ratio.start===null){
                        ratio.start = {x:x*INCREMNET.w, y:y*INCREMNET.h}
                        ratio.end.x = ratio.start.x + INCREMNET.w
                        ratio.end.y = ratio.start.y + INCREMNET.h
                    }else{
                        const percentY = y / (fourSquare.length-1)
                        const percentX = x / (fourSquare[y].length-1)                            
                        
                        ratio.end.x = Math.max(percentX, ratio.end.x)
                        ratio.end.y = Math.max(percentY, ratio.end.y)
                    }                        
                }
            })
        })

        ratio.size.w = Math.abs(ratio.start.x - ratio.end.x)
        ratio.size.h = Math.abs(ratio.start.y - ratio.end.y)
        return ratio
    }

    componentDidMount() {
        this.ctx = this.canvas.getContext("2d")
        this._draw()
        this.props.animate()
    }

    _draw(){        
        this.ctx.fillStyle = this.props.color
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.beginPath();
        this.ctx.moveTo(this.x, this.y);
        this.ctx.arc(this.x, this.y, this.radius, radians(this.props.start), radians(this.props.start+this.props.tween));
        this.ctx.closePath();
        this.ctx.fill();
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.tween !== this.props.tween){
            this._draw()    
        }
    }

    render () {
        
        return (
            <CanvasCSS
                className={this.props.className}
                innerRef={me=>this.canvas=me} 
                width={this.canvasSize.width} 
                height={this.canvasSize.height}                
            />
        )
    }

    static propTypes = {
        start: PropTypes.number.isRequired, 
        custom: PropTypes.object.isRequired,
        onAnimateDone: PropTypes.func,
        tweenAmount: PropTypes.number.isRequired
    }
    

    static defaultProps = {
        start: 20,    
        tweenAmount: 180,
        gar: 'garsdfsf',
        color: '#ff0000',
        custom: {slices:[[true, true], [true, true]], size: 200},
        onAnimateDone: ()=>{console.log('onAnimateDone');}
    }
}

const CanvasCSS = styled('canvas')`
    width:${me=>me.width/2}px;
    height:${me=>me.height/2}px;
    /* transform: scale(.5);
    transform-origin: 0 0; */
    
`



export default HocAnatomy(Pie)

