import { Canvas } from "react-three-fiber";
import { OrbitControls, Stage } from '@react-three/drei';
import Model from './Model';
import { Suspense, useRef } from 'react';

const Earth = () => {
    const ref = useRef();

    return (
        <Canvas dpr={[1, 2]} camera={{ fov: 50 }} style={{
            width: '100vw',
            height: '100vh'
        }}>
            <Suspense fallback={null}>
                <Stage controls={ref}>
                    <Model /> 
                </Stage>
            </Suspense>
            <OrbitControls ref={ref} autoRotate makeDefault />
        </Canvas>
    );
};
  
export default Earth;