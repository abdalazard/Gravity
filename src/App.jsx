import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useLoader } from '@react-three/fiber';
import { useFrame } from '@react-three/fiber';
import player from './assets/sprites/player/textures/Astronaut_matmat_baseColor.png'; // Make sure to import the correct image file

// Component for the ground
function Ground() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
      <planeGeometry args={[50, 50]} />
      <meshStandardMaterial color="#808080" />
    </mesh> 
  );
}

function Player() {
  const map = useLoader(TextureLoader, player); 
  const material = new THREE.SpriteMaterial({ map: map, color: 0xffffff });

  const spriteRef = useRef();

  useFrame(() => {
    // Animações futuras podem ser adicionadas aqui
    // spriteRef.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={spriteRef} position={[0, 0.5, 0]} scale={[1, 1, 1]}> {/* Adjust scale as needed */}
      <planeGeometry args={[1, 1]} /> {/* Use planeGeometry to display the sprite */}
      <spriteMaterial map={map} /> 
    </mesh>
  );
}
// Main game scene
function Scene() {
  return (
    <>
      {/* Lights */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 10, 5]} intensity={1} castShadow />

      {/* Ground and Player */}
      <Ground />
      <Player /> {/* Player adicionado diretamente na cena */}
    </>
  );
}

function App() {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <Canvas shadows camera={{ position: [10, 10, 10], fov: 50 }}>
        <Scene />
        <OrbitControls 
          maxPolarAngle={Math.PI / 3}
          minPolarAngle={0} 
        />
      </Canvas>
    </div>
  );
}

export default App;
