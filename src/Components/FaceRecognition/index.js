import React from 'react';
import { FaceRecognitionContainer, ImageContainer, Image, BoundingBox } from './FaceRecognitionElements';

const FaceRecogntion = ({ IMAGE_URL, box }) => {
    return (
        <FaceRecognitionContainer>
            <ImageContainer>
                <Image src={IMAGE_URL} >
                </Image>
                <BoundingBox style={{
                    left: box.leftCol,
                    top: box.topRow,
                    right: box.rightCol,
                    bottom: box.bottomRow
                }}>
                </BoundingBox>
            </ImageContainer>
        </FaceRecognitionContainer>
    )
}

export default FaceRecogntion