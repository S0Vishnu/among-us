import { CapsuleCollider, RigidBody } from "@react-three/rapier";
import { Suspense, useEffect, useRef, useState } from "react";
import { Group } from "three";
import { Cruemate } from "./avatar/Cruemate";

// Define prop types
interface ControlsProps {
  character: String;
}

export default function Controls({ character }: ControlsProps) {
  const [animation, setAnimation] = useState<string>("idle");

  // Ref types for character and related objects
  const characterMainRef = useRef<any>(null); // Changed to RigidBody type
  const characterRef = useRef<Group>(null);
  // dummy start

  // Toggle animation when "t" key is pressed
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "t" || event.key === "T") {
        // Toggle between 'idle' and 'run'
        setAnimation((prevAnimation) =>
          prevAnimation === "idle" ? "run" : "idle"
        );
      }
    };

    // Add event listener for keydown
    window.addEventListener("keydown", handleKeyDown);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  // dummy end
  return (
    <Suspense fallback={null}>
      {/* Character Control */}
      <RigidBody colliders={false} lockRotations={true} ref={characterMainRef}>
        {/* character controller container */}
        <group ref={characterRef} position={[0, 1, 0]}>
          {/* character */}
          {character === "Cruemate" && (
            <Cruemate
              animation={animation}
              scale={0.05}
              position={[0, 0.43, 0]}
            />
          )}
        </group>
        <CapsuleCollider args={[0.03, 0.04]} position={[0, 1.5, 0]} />
      </RigidBody>
    </Suspense>
  );
}
