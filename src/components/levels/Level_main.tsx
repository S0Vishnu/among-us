import { useAnimations, useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import { Mesh, MeshStandardMaterial } from "three";
import { GLTF } from "three-stdlib";
// import { LevelMap } from "../map/levelMap";
import { useEffect, useRef } from "react";

type GLTFResult = GLTF & {
  nodes: {
    Plane001_1: Mesh;
    Plane001_2: Mesh;
  };
  materials: {
    Color_01: MeshStandardMaterial;
    Color_I: MeshStandardMaterial;
  };
};

function CollitionModels(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/models/collition.gltf") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group position={[-0.249, 0, 1.279]} scale={4.686}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001_1.geometry}
          material={materials.Color_01}
        >
          <meshStandardMaterial
            attach="material"
            transparent={true}
            opacity={0}
          />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001_2.geometry}
          material={materials.Color_I}
        >
          <meshStandardMaterial
            attach="material"
            transparent={true}
            opacity={0}
          />
        </mesh>
      </group>
    </group>
  );
}

function LevelMain() {
  const { scene, animations } = useGLTF("/models/ship.gltf");
  const group = useRef();
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    scene.traverse((child) => {
      if ((child as Mesh).isMesh) {
        const mesh = child as Mesh; // Type cast to Mesh
        mesh.castShadow = true;
        mesh.receiveShadow = true;
      }
    });
  }, [scene]);

  useEffect(() => {
    if (actions["Object_27.001Action"]) {
      actions["Object_27.001Action"].play(); // Play the specific animation
    }
  }, [actions]);

  return <primitive object={scene} />;
}

export default function Level() {
  return (
    <group>
      <RigidBody type="fixed" colliders="trimesh">
        <CollitionModels />
      </RigidBody>
      <LevelMain />
    </group>
  );
}

useGLTF.preload("/models/collition.gltf");