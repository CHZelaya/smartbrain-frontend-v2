import styled from 'styled-components'

export const LogoContainer = styled.div.attrs({
    className: 'container ma4 mt0',
})``

export const Card = styled.div.attrs({
    className: 'card',
    tiltReverse: true,
})`
    display: flex;
    `

export const Tilt = styled.div.attrs({
    className: 'tilt',
})`
  background: #355C7D;
  /* fallback for old browsers */
  background: -webkit-radial-gradient( #C06C84, #6C5B7B, #355C7D);
  /* Chrome 10-25, Safari 5.1-6 */
  background: radial-gradient( #C06C84, #6C5B7B, #355C7D);
  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */`

export const InnerTilt = styled.div.attrs({
    className: 'inner-element br2 shadow-2'
})`
height: 150px;
width: 150px;
backgroundColor: 'green'; 
`