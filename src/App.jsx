import { Canvas } from '@react-three/fiber'
import React from 'react'
import './style.css';
import { Environment, OrbitControls, ScrollControls } from '@react-three/drei';
import MacContainer from './MacContainer';

const App = () => {
  return (
    <div className='w-full h-screen flex flex-col'>
      <div className='absolute text-white top-20 left-1/2 -translate-x-1/2 '>
        <h3 className='text-7xl masked tracking-tighter font-light'>macbook pro.</h3>
      </div>
      <div className='absolute text-white top-20 left-1/2 -translate-x-1/2 '>
        <h3 className='text-7xl masked tracking-tighter font-light'>macbook pro.</h3>
      </div>
      <Canvas camera={{fov: 12, position: [0, -10, 220]}}>
        {/* <OrbitControls /> */}
        <Environment files={[
          "https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/studio_small_09_4k.exr"
        ]} />
        <ScrollControls>
          <MacContainer />
        </ScrollControls>
      </Canvas>
      
      <div className=' flex flex-col items-center justify-center text-white/40 pb-2'>
        <h4 className='font-mono tracking-widest'>
          Swanand Deshpande
        </h4>
      </div>
    </div>
  )
}

export default App