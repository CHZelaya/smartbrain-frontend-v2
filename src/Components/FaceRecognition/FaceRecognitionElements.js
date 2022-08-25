import styled from 'styled-components'

export const FaceRecognitionContainer = styled.div.attrs({
    className: 'face-recognition-container center ma',
})``

export const ImageContainer = styled.div.attrs({
    className: 'face-recognition absolute mt2 center'
})``

export const Image = styled.img.attrs({
    className: 'pa3',
    // alt: 'Image',
    id: "InputImage",
})`
width: 500px;
height: auto;
`