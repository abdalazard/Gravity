import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

// Component for the ground
function Ground() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
      <planeGeometry args={[500, 500]} />
      <meshStandardMaterial color="#808080" />
    </mesh> 
  );
}

// Component for the player's character
function Player() {
  return (
    <mesh position={[0, 0.5, 0]} castShadow>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#00ff00" />
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
      <Player />
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
