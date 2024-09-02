import React, { Suspense, useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader'
import Butterfly from '../models/Butterfly'
import Sky from '../models/Sky'

const Home = () => {
  const [flapSpeed, setFlapSpeed] = useState(5); // Set initial flap speed
  const [showSpeedDisplay, setShowSpeedDisplay] = useState(false);
  const [scrollTimeout, setScrollTimeout] = useState(null);

  const adjustButterflyForScreenSize = () => {
    let screenScale = null
    let screenPosition = [0, 0, -30]
    let rotation = [0.6, 0.05, -0.05]

    if (window.innerWidth < 768) {
      screenScale = [45, 45, 45]
    } else {
      screenScale = [50, 50, 50]
    }

    return [screenScale, screenPosition, rotation]
  }

  const [butterflyScale, butterflyPosition, butterflyRotation] = adjustButterflyForScreenSize()

  useEffect(() => {
    const handleScroll = (event) => {

      // Show speed display on scroll
      setShowSpeedDisplay(true);

      // Clear previous timeout
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }

      // Hide speed display after 1 second of inactivity
      const timeout = setTimeout(() => {
        setShowSpeedDisplay(false);
      }, 1000);
      setScrollTimeout(timeout);
    };

    window.addEventListener('wheel', handleScroll);
    return () => {
      window.removeEventListener('wheel', handleScroll);
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, [flapSpeed, scrollTimeout]);

  return (
    <section className='w-full h-screen relative'>
      <Canvas className='w-full h-screen relative' camera={{ near: 0.1, far: 1000 }}>
        <Suspense fallback={<Loader />}>
          <directionalLight />
          <ambientLight intensity={0.2} />
          <spotLight />
          <hemisphereLight skyColor='#b1e1ff' groundColor='#000000' />

          <Sky />

          <Butterfly
            position={butterflyPosition}
            scale={butterflyScale}
            rotation={butterflyRotation}
            flapSpeed={flapSpeed}
            setFlapSpeed={setFlapSpeed}
          />
        </Suspense>
      </Canvas>
      {showSpeedDisplay && (
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 text-white bg-blue-500 bg-opacity-50 px-1 py-1 rounded-lg font-poppins">
          Flap Speed: {Math.round((flapSpeed / 30) * 100)}%
        </div>
      )}
    </section>

    
  )
}

export default Home
