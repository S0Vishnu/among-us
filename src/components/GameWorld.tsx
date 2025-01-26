import { Environment, OrthographicCamera } from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import { useControls } from "leva";
import { useEffect, useRef, useState } from "react";
import type { OrthographicCamera as THREEOrthographicCamera } from "three";
import Controls from "./Controls";
// levels
import Level from "./levels/Level_main";
// import Plane from "./levels/Level_zero";

export default function GameWorld() {
  const shadowCameraRef = useRef<THREEOrthographicCamera | null>(null); // Updated type

  const maps = {
    level_1: {
      scale: 3,
      position: [0, -4, 0],
    },
  };

  const characters = {
    Cruemate: "Cruemate",
    Ghost: "Ghost",
  };

  const { map } = useControls("Map", {
    map: {
      value: "level_1",
      options: Object.keys(maps),
    },
  });

  const { character } = useControls("Character", {
    character: {
      value: "Cruemate",
      options: Object.keys(characters),
    },
  });

  const [debug, setDebug] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "`") {
        setDebug((prevDebug) => !prevDebug);
      }
    };

    // Attach the event listener when the component mounts
    window.addEventListener("keydown", handleKeyDown);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      <Environment preset="city" />
      <directionalLight
        intensity={0.65}
        castShadow
        position={[-15, 10, 15]}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-bias={-0.00005}
      >
        <OrthographicCamera
          left={-22}
          right={15}
          top={10}
          bottom={-20}
          ref={shadowCameraRef} // Updated
          attach="shadow-camera"
        />
      </directionalLight>
      <Physics key={map} debug={debug}>
        {/* <Plane /> */}
        <Level />
        <Controls character={character} />
      </Physics>
    </>
  );
}
