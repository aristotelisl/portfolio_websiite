import { useGLTF } from '@react-three/drei'
import React, { useRef, useEffect } from 'react'
import skyScene from '../assets/3d/sky.glb'

const Sky = (props) => {
  const skyRef = useRef()
  const { scene } = useGLTF(skyScene)

  // Mouse movement effect
  useEffect(() => {
    const handleMouseMove = (event) => {
      if (skyRef.current) {
        const { innerWidth, innerHeight } = window
        const mouseX = (event.clientX / innerWidth) * 2 - 1
        const mouseY = -(event.clientY / innerHeight) * 2 + 1

        skyRef.current.rotation.y = mouseX * 0.2 // Adjust sensitivity as needed
        skyRef.current.rotation.x = mouseY * 0.2 // Adjust sensitivity as needed
      }
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <mesh ref={skyRef} {...props}>
      <primitive object={scene} />
    </mesh>
  )
}

export default Sky
