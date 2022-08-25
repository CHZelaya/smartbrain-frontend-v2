import React from 'react';
import { FaceRecognitionContainer, ImageContainer, Image } from './FaceRecognitionElements';

const FaceRecogntion = ({ IMAGE_URL }) => {
    return (
        <FaceRecognitionContainer>
            <ImageContainer>
                <Image src={IMAGE_URL} ></Image>
                {/* <div className="Bounding-box"
                // style={{
                //     left: box.leftCol,
                //     top: box.topRow,
                //     right: box.rightCol,
                //     bottom: box.bottomRow
                // }}
                >
                </div> */}
            </ImageContainer>
        </FaceRecognitionContainer>
    )
}

export default FaceRecogntion