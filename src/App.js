import { Canvas } from "@react-three/fiber";
import Room from "./components/geometry/Room";
import CameraControls from "./components/utils/CameraControls";

function App() {
  return (
    <Canvas>
      <CameraControls />
      <ambientLight intensity={0.5} />
      <directionalLight color="white" position={[0, 2.5, 5]} />
      <Room />
    </Canvas>
  );
}

export default App;
