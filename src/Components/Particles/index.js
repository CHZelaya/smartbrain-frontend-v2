import Particles from 'react-tsparticles';
// import { loadSlim } from 'tsparticles-slim';
import { loadFull } from 'tsparticles';
import { useCallback, useMemo } from 'react';

const ParticlesComponent = () => {
    const options = useMemo(() => {
        return {
            particles: {
                detectRetina: false,
                fpsLimit: 120,
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
                    value: 75,
                },
                fullscreen: {
                    enable: true,
                    zIndex: -1,
                },
                interactivity: {
                    detectsOn: "canvas",
                    events: {
                        onHover: {
                            enable: true,
                            mode: 'bubble',
                        },
                        resize: true,
                    },
                    modes: {
                        bubble: {
                            distance: 100,
                            duration: 2,
                            opacity: 1,
                            size: 6,
                        }
                    }
                }
            }

        }
    }, []);

    const particlesInit = useCallback((engine) => {
        loadFull(engine);
    }, []);

    return <Particles init={particlesInit} options={options} />;
}

export default ParticlesComponent;