import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader'
import Butterfly from '../models/Butterfly'

const Home = () => {

  const adjustButterflyForScreenSize = () => {
    let screenScale = null
    let screenPosition = [0, 0, -30]
    let rotation = [0.6, 0.05, -0.05]

    if(window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9]
    } else {
      screenScale = [60, 60, 60]
    }

    return [screenScale, screenPosition, rotation]
  }

  const [butterflyScale, butterflyPosition, butterflyRotation] = adjustButterflyForScreenSize()

  return (
    <section className='w-full h-screen relative'>
      <Canvas 
        className='w-full h-screen relative'
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight/>
          <ambientLight intensity={0.2}/>
          <spotLight/>
          <hemisphereLight skyColor='#b1e1ff' groundColor="#000000"/>

          <Butterfly 
            position={butterflyPosition}
            scale={butterflyScale}
            rotation={butterflyRotation}
          />
        </Suspense>
      </Canvas>
    </section>
  )
}

export default Home