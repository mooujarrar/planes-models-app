import { Float, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { PlaneA350 } from "../models/a350";

export default function A350() {
  return (
    <Canvas
      style={{ height: "200px" }}
      shadows
      camera={{ position: [3, 3, 3], fov: 30 }}
    >
      <color attach="background" args={["#ffffff"]} />
      <ambientLight intensity={0.5} />
      <Stage
        adjustCamera={0.8}
        intensity={0.5}
        shadows="contact"
        environment="city"
      >
        <Float
          speed={1} // Animation speed, defaults to 1
          rotationIntensity={1} // XYZ rotation intensity, defaults to 1
          floatIntensity={0.1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
          floatingRange={[1, 2]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
        >
          <PlaneA350 />
        </Float>
      </Stage>
    </Canvas>
  );
}