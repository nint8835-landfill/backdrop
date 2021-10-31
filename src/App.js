import { Canvas } from "@react-three/fiber";
import Room from "./components/geometry/Room";
import CameraControls from "./components/utils/CameraControls";

function App() {
  return (
    <Canvas>
      <CameraControls />
      <Room />
    </Canvas>
  );
}

export default App;
