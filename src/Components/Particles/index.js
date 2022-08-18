import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
// import { loadFull } from 'tsparticles';
import { useCallback, useMemo } from 'react';

const ParticlesComponent = () => {
    const options = useMemo(() => {
        return {
            particles: {
                move: {
                    enable: true,
                    speed: { min: 1 },
                },
                links: {
                    enable: true,
                    distance: 100,
                },
                size: {
                    value: { min: 1, max: 3 },
                },
                opacity: {
                    value: { min: 0.1, max: 0.8 },
                },
                number: {
                    value: 100,
                },
                fullscreen: {
                    enable: true,
                    zIndex: -1,
                },
            }
        }
    }, []);

    const particlesInit = useCallback((engine) => {
        loadSlim(engine);
    }, []);

    return <Particles init={particlesInit} options={options} />;
}

export default ParticlesComponent;