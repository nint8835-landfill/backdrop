import { Canvas } from "@react-three/fiber";
import Room from "./components/geometry/Room";

function App() {
  return (
    <Canvas
      camera={{
        position: [-(147 / 2 + 10 / 2 + 136 / 2 + 10), 0, 357 - 46],
        rotation: [-Math.PI / 40, 0, 0],
        fov: 78,
      }}
      gl={{ physicallyCorrectLights: true }}
    >
      {/* <CameraControls /> */}
      <Room />
    </Canvas>
  );
}

export default App;
