/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: ngocvu13120 (https://sketchfab.com/ngocvu13120)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/butterfly-blend-fbx-file-cd8e96659de94fa79c9e6ea1a191c853
Title: Butterfly - Blend, FBX file
*/

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { a } from '@react-spring/three'

import butterflyScene from '../assets/3d/butterfly.glb'

const Butterfly = (props) => {
  const butterflyRef = useRef()
  const group = useRef()
  const { nodes, materials, animations } = useGLTF(butterflyScene)
  const { actions } = useAnimations(animations, group)
  return (
    <a.group ref={butterflyRef} {...props}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group
            name="6e51c088a3eb46248d26600cc1cfcfdefbx"
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.01}>
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
                  scale={9.692}>
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
                  </group>
                </group>
                <group name="Sun" position={[-86.859, 43.2, -182.139]} scale={100}>
                  <group name="Object_48" rotation={[Math.PI / 2, 0, 0]}>
                    <group name="Object_49" />
                  </group>
                </group>
                <group
                  name="Camera"
                  position={[-146.401, 98.934, -189.305]}
                  rotation={[0, -0.949, -0.342]}
                  scale={100}>
                  <group name="Object_51" />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </a.group>
  )
}

export default Butterfly