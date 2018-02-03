import styled, { css } from 'styled-components'

const sizes = {
  	phone: 376,
  	tablet: 768,
  	desktop: 1170,
  	giant: 1570,
}


// iterate through the sizes and create a media template
const mq = Object.keys(sizes).reduce((accumulator, label) => {
  // use em in breakpoints to work properly cross-browser and support users
  // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
  const emSize = sizes[label] / 16
  accumulator[label] = (...args) => css`
    @media (min-width: ${emSize}em) {
      ${css(...args)}
    }
  `
  return accumulator
}, {})


export { mq as default, sizes }