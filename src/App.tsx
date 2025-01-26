import { useRef } from "react";
import "./assets/style/temp.scss";
import { KeyboardControls, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import GameWorld from "./components/GameWorld";

function App() {
  const keyboardMap = [
    { name: "forward", keys: ["ArrowUp", "KeyW"] },
    { name: "backward", keys: ["ArrowDown", "KeyS"] },
    { name: "left", keys: ["ArrowLeft", "KeyA"] },
    { name: "right", keys: ["ArrowRight", "KeyD"] },
    { name: "jump", keys: ["Space"] },
    { name: "run", keys: ["Shift"] },
    // Optional animation key map
    // { name: "action1", keys: ["1"] },
  ];

  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  return (
    <div className="canvas-main">
      <KeyboardControls map={keyboardMap}>
        <Canvas
          ref={canvasRef}
          shadows
          camera={{ near: 0.1, fov: 40 }}
          style={{
            touchAction: "none",
          }}
        >
          {/* Lighting */}
          <color attach="background" args={["#ececec"]} />
          <OrbitControls />
          <ambientLight intensity={0.5} />

          {/* Physics simulation */}
          {/* call world here */}
          <GameWorld />
        </Canvas>
      </KeyboardControls>
    </div>
  );
}

export default App;
