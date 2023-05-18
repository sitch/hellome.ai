import { useRef, useState } from "react"

import { PointMaterial, Points } from "@react-three/drei"
import { Canvas, useFrame } from "@react-three/fiber"
import * as random from "maath/random/dist/maath-random.cjs"
import { type Points as ThreePoints } from "three"

type Props = Partial<ThreePoints>

function Stars(_props: Props) {
  const ref = useRef<ThreePoints>(null)
  const [sphere] = useState<Float32Array>(
    () =>
      random.inSphere(new Float32Array(5000), { radius: 1.5 }) as Float32Array,
  )
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10
      ref.current.rotation.y -= delta / 15
    }
  })
  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        positions={sphere}
        stride={3}
        frustumCulled={false}
        // {...props}
      >
        <PointMaterial
          transparent
          color="#ffa0e0"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  )
}

export function StarsOverlay() {
  return (
    <div className="m-0 h-screen w-full overflow-hidden bg-black p-0">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Stars />
      </Canvas>
    </div>
  )
}
