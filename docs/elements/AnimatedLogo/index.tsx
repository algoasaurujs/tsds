import React, { useEffect } from 'react';
import { animationMaker } from './animationMaker';

type AnimatedLogoProps = {
    children?: React.ReactNode
}

const AnimatedLogo: React.FC<AnimatedLogoProps> = () => {

    const canvasRef = React.useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        if (canvasRef.current) {
            animationMaker(canvasRef.current);
        }
    }, [])

    return (
        <canvas ref={canvasRef}></canvas>
    );
}

export default AnimatedLogo;
