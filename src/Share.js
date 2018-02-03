import React, { Component } from 'react'
import styled from 'styled-components'

import queryString from 'query-string'
import Track from './Track'
import mq from './mq'

import { FacebookShareButton, FacebookIcon, TwitterIcon, TwitterShareButton } from 'react-share';




function track(type){
  Track('social', type)
}



class Social extends Component{
  render(){
    const {className, word} = this.props
    const title = `https://mocean.ca`
    const shareUrl = `${title}/${window.location.hash}`
    
    
    
    const msg = `Hey look pie charts can be fonts! Check it out!`
    return (
      <ShareCSS
          className={className}
      >
          <div className="social-item" onClick={track.bind(this, 'facebook')}>
          <InfoFB>#{word}</InfoFB>
          <FacebookShareButton
            url={shareUrl}            
            >
            <FacebookIcon
              size={30}
              round />
          </FacebookShareButton>
        </div>

       

        <div className="social-item" onClick={track.bind(this, 'twitter')}>
          <Info>#{word}</Info>
          <TwitterShareButton
            url={shareUrl}
            title={`${msg} @lonelydatum`}
            >
            <TwitterIcon size={30} round />
          </TwitterShareButton>
          
        </div>
      </ShareCSS>
    )
  }

}



const Info = styled('div')`
  width: 130px;
  height: 30px;
  /* border: 1px solid red; */
  position: absolute;
  color: #f121ca;
  z-index: 0;
  top: 0;
  left: 0;
  line-height: 30px;
  padding-left: 40px;
  border-radius: 15px;
  background-color: rgba(255, 255, 255, .6);
  font-size: .85em;
  overflow: hidden;
  font-family: ${me=>me.theme.font};

  ${mq.tablet`
  width: 130px;
  `}
`

const InfoFB = styled(Info)`
  text-align: right;
  padding-right: 40px;
  right: 0;
  left: initial;
`


const ShareCSS = styled.div`
	margin-bottom: 1em;

	.social-item{
		margin-right: 10px;
    
    position: relative;
    .SocialMediaShareButton{
      position: relative;
    }
	}
  
  justify-content: center;
	display: flex;

`


export default Social