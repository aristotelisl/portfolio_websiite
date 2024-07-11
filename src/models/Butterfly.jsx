import React, { useRef, useState, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import { useThree, useFrame } from '@react-three/fiber';
import butterflyScene from '../assets/3d/butterfly.glb';

const Butterfly = (props) => {
  const butterflyRef = useRef();
  const { nodes, materials } = useGLTF(butterflyScene);
  const { camera } = useThree();

  const [scrollY, setScrollY] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [rotation, setRotation] = useState([0.5, 0, 0]);
  const [lastMousePosition, setLastMousePosition] = useState({ x: 0, y: 0 });
  const [flapSpeed, setFlapSpeed] = useState(2); // Initial flap speed

  useEffect(() => {
    const handleScroll = (event) => {
      const newFlapSpeed = Math.max(0, flapSpeed + event.deltaY * -0.001);
      setFlapSpeed(newFlapSpeed);
    };
    window.addEventListener('wheel', handleScroll);
    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, [flapSpeed]);

  const handlePointerDown = (event) => {
    setIsDragging(true);
    setLastMousePosition({ x: event.clientX, y: event.clientY });
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  const handlePointerMove = (event) => {
    if (!isDragging) return;

    const deltaX = event.clientX - lastMousePosition.x;
    const deltaY = event.clientY - lastMousePosition.y;

    setRotation((prevRotation) => [
      prevRotation[0] + deltaY * 0.01,
      prevRotation[1] + deltaX * 0.01,
      prevRotation[2],
    ]);

    setLastMousePosition({ x: event.clientX, y: event.clientY });
  };

  useEffect(() => {
    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', handlePointerUp);
    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
    };
  }, [isDragging, lastMousePosition]);

  useFrame((state, delta) => {
    if (butterflyRef.current) {
      const elapsedTime = state.clock.getElapsedTime();
      butterflyRef.current.rotation.x = rotation[0];
      butterflyRef.current.rotation.y = rotation[1];
      butterflyRef.current.rotation.z = rotation[2];
      const wingRotation = Math.sin(elapsedTime * flapSpeed) * 0.5; // Adjust the multiplier as needed
      butterflyRef.current.getObjectByName('upwwing_L_014').rotation.z = wingRotation;
      butterflyRef.current.getObjectByName('upwwing_R_012').rotation.z = -wingRotation;
      butterflyRef.current.getObjectByName('lowwing_L_015').rotation.z = wingRotation;
      butterflyRef.current.getObjectByName('lowwing_R_013').rotation.z = -wingRotation;
    }
  });

  return (
    <group
      ref={butterflyRef}
      {...props}
      rotation={rotation}
      onPointerDown={handlePointerDown}
    >
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group
            name="6e51c088a3eb46248d26600cc1cfcfdefbx"
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.01}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group
                  name="Object002"
                  position={[2.165, 5.628, 2.27]}
                  rotation={[-0.991, 0, 0]}
                  scale={100}
                />
                <group
                  name="body"
                  position={[2.165, 5.628, 2.27]}
                  rotation={[-0.991, 0, 0]}
                  scale={100}
                />
                <group
                  name="lrau"
                  position={[2.165, 5.628, 2.27]}
                  rotation={[-0.991, 0, 0]}
                  scale={100}
                />
                <group
                  name="Armature"
                  position={[0.151, 2.828, 5.457]}
                  rotation={[-2.545, 0, 0]}
                  scale={9.692}
                >
                  <group name="Object_8">
                    <primitive object={nodes._rootJoint} />
                    <skinnedMesh
                      name="Object_11"
                      geometry={nodes.Object_11.geometry}
                      material={materials['Material.001']}
                      skeleton={nodes.Object_11.skeleton}
                    />
                    <skinnedMesh
                      name="Object_13"
                      geometry={nodes.Object_13.geometry}
                      material={materials['Material.001']}
                      skeleton={nodes.Object_13.skeleton}
                    />
                    <skinnedMesh
                      name="Object_15"
                      geometry={nodes.Object_15.geometry}
                      material={materials['Material.001']}
                      skeleton={nodes.Object_15.skeleton}
                    />
                    <group
                      name="Object_10"
                      position={[2.165, 5.628, 2.27]}
                      rotation={[-0.991, 0, 0]}
                      scale={100}
                    />
                    <group
                      name="Object_12"
                      position={[2.165, 5.628, 2.27]}
                      rotation={[-0.991, 0, 0]}
                      scale={100}
                    />
                    <group
                      name="Object_14"
                      position={[2.165, 5.628, 2.27]}
                      rotation={[-0.991, 0, 0]}
                      scale={100}
                    />
                    <group name="upwwing_L_014">
                      <primitive object={nodes.upwwing_L_014} />
                    </group>
                    <group name="upwwing_R_012">
                      <primitive object={nodes.upwwing_R_012} />
                    </group>
                    <group name="lowwing_L_015">
                      <primitive object={nodes.lowwing_L_015} />
                    </group>
                    <group name="lowwing_R_013">
                      <primitive object={nodes.lowwing_R_013} />
                    </group>
                  </group>
                </group>
                <group
                  name="Sun"
                  position={[-86.859, 43.2, -182.139]}
                  scale={100}
                >
                  <group name="Object_48" rotation={[Math.PI / 2, 0, 0]}>
                    <group name="Object_49" />
                  </group>
                </group>
                <group
                  name="Camera"
                  position={[-146.401, 98.934, -189.305]}
                  rotation={[0, -0.949, -0.342]}
                  scale={100}
                >
                  <group name="Object_51" />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
};

export default Butterfly;
