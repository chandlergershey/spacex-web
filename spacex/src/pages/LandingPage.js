import React, {Suspense, useRef} from "react";
import "./LandingPage.scss";
//import { Section } from "../components/Section";
import { Section } from '../components/Section';
import { Canvas, useFrame } from "react-three-fiber";
import {Html, useGLTFLoader} from 'drei';
import LoginHeader from '../components/LoginHeader';

// MARS MODEL
const Model = () => {
  const gltf = useGLTFLoader('/Mars.glb', true);
  return <primitive object={gltf.scene} dispose={null}/>;
}

// LIGHT SHINING ON MARS MODEL
const Lights = () => {
  return (
    <>
    <ambientLight intensity={0.025} />
    <directionalLight position={[10,10,5]} intensity={1.1}/>
    </>
  )
}

// HTML content for Mars Model
const HTMLContent = () => {

  // rotation
  const ref = useRef()
  useFrame(() => (ref.current.rotation.y += 0.0005))
  useFrame(() => (ref.current.rotation.x += 0.0005))
  

  return (
    <Section factor={1} offset={0}>
      <group position={[0, 0, 0]}>
        <mesh ref={ref} position={[0, 0, -1000]}>
          <Model />
        </mesh>
        <Html fullscreen>
          <div className='containerText'>
            <h1 className='title'>Join the mission.</h1>
          </div>
        </Html>
      </group>
    </Section>
  )
}

export default function App() {
  return (
    <>
      <div className="landing-page-container">
        <LoginHeader />
        <div className="mars-container">
          <Canvas colorManagement camera={{ position: [0, 0, 120], fov: 70}}>
            <Lights />
            <Suspense fallback={null}>
              <HTMLContent/>
            </Suspense>
          </Canvas>
        </div>
      </div>
    </>
  );
}

