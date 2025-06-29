import { Environment, MeshPortalMaterial, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import * as THREE from "three";

const Side = ({ rotation = [0, 0, 0], bg = "#f0f0f0", children, index }) => {
  const mesh = useRef();
  const { nodes } = useGLTF("/aobox-transformed.glb");

  useFrame((state, delta) => {
    mesh.current.rotation.x = mesh.current.rotation.y += delta;
  });

  return (
    <MeshPortalMaterial worldUnits={false} attach={`material-${index}`}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1.5} castShadow />
      <directionalLight position={[-5, -5, -5]} intensity={1.5} castShadow />
      <Environment preset="city" />
      <spotLight
        castShadow
        color={bg}
        intensity={2}
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        shadow-normalBias={0.05}
        shadow-bias={0.0001}
      />
      <mesh
        castShadow
        receiveShadow
        rotation={rotation}
        geometry={nodes.Cube.geometry}
      >
        <meshStandardMaterial
          aoMapIntensity={1}
          aoMap={nodes.Cube.material.aoMap}
          color={bg}
        />
      </mesh>

      {/* Rotating object */}
      <mesh castShadow receiveShadow ref={mesh}>
        {children}
        <meshLambertMaterial color={bg} />
      </mesh>
    </MeshPortalMaterial>
  );
};

export default Side;
