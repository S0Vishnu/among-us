import { RigidBody } from "@react-three/rapier";

export default function Plane() {
  return (
    // RigidBody component applies physics to the object.
    // type="fixed" makes the object static, meaning it won't move or be affected by forces.
    // colliders="hull" generates an accurate collision boundary for the plane.
    <RigidBody type="fixed" colliders="hull">
      {/* The mesh is the visual representation of the plane */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        {/* Plane geometry creates a flat 2D surface with dimensions of 50x50 */}
        <planeGeometry args={[50, 50]} />

        {/* The material determines the appearance of the plane, here it's orange */}
        <meshStandardMaterial color="orange" />
      </mesh>
    </RigidBody>
  );
}
