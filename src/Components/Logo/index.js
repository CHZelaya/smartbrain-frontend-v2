import React from 'react';
import { LogoContainer, Card, InnerTilt } from './LogoElements';
import Tilt from 'react-parallax-tilt';
import brain from './brain.png';

const Logo = () => {
    return (
        <LogoContainer>
            <Card>
                <Tilt
                    tiltReverse={true}
                    className="parallax-effect-img"
                    tiltMaxAngleX={40}
                    tiltMaxAngleY={40}
                    perspective={800}
                    transitionSpeed={1500}
                    scale={1.1}
                    gyroscope={true}
                >
                    <InnerTilt>
                        <img src={brain} style={{ paddingtop: "5px", width: "auto", height: "auto" }} className="pa3" alt="pic" />
                    </InnerTilt>
                </Tilt>
            </Card>
        </LogoContainer>
    )
}

export default Logo