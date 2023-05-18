import { useRef, type ReactNode } from "react"

import {
  AccumulativeShadows,
  Center,
  Environment,
  RandomizedLight,
  useGLTF,
  useTexture,
} from "@react-three/drei"
import {
  Canvas,
  useFrame,
  type MeshProps,
  type ReactThreeFiber,
} from "@react-three/fiber"
import { castArray } from "lodash"
import { easing } from "maath"
import type THREE from "three"
import { Vector3, type Group } from "three"
import { type GLTF } from "three/examples/jsm/loaders/GLTFLoader"
import { useSnapshot } from "valtio"

import { state } from "@/components/books/BookCustomizer/store"

type AppProps = {
  position?: Vector3
  fov?: number
}

export const App = ({
  position = new Vector3(0, 0, 2.5),
  fov = 25,
}: AppProps) => (
  <Canvas
    shadows
    camera={{ position, fov }}
    // camera={{ fov: 75, position: [-10, 45, 20]}}
    gl={{ preserveDrawingBuffer: true }}
    eventSource={document.getElementById("root") ?? undefined}
    eventPrefix="client"
  >
    <ambientLight intensity={0.5} />
    <Environment preset="city" />
    <CameraRig>
      <Backdrop />
      <Center>
        <Shirt />
      </Center>
    </CameraRig>
  </Canvas>
)

type SoftShadowMaterialProps = {
  map: THREE.Texture
  color?: ReactThreeFiber.Color
  alphaTest?: number
  blend?: number
}

type AccumulativeContext = {
  lights: Map<any, any>
  temporal: boolean
  frames: number
  blend: number
  count: number
  getMesh: () => THREE.Mesh<
    THREE.PlaneGeometry,
    SoftShadowMaterialProps & THREE.ShaderMaterial
  >
  reset: () => void
  update: (frames?: number) => void
}

function Backdrop() {
  const store = useSnapshot(state)

  const shadows = useRef<AccumulativeContext>(null)
  useFrame((state, delta) => {
    // const mesh = shadows.current?.getMesh()

    // if(mesh)

    // console.log(state.get(), state.color, store.color)

    easing.dampC(
      shadows.current!.getMesh().material.color! as THREE.Color,
      // state.color,
      store.color,
      0.25,
      delta,
    )
  })
  return (
    <AccumulativeShadows
      ref={shadows}
      temporal
      frames={60}
      alphaTest={0.85}
      scale={10}
      rotation={[Math.PI / 2, 0, 0]}
      position={[0, 0, -0.14]}
    >
      <RandomizedLight
        amount={4}
        radius={9}
        intensity={0.55}
        ambient={0.25}
        position={[5, 5, -10]}
      />
      <RandomizedLight
        amount={4}
        radius={5}
        intensity={0.25}
        ambient={0.55}
        position={[-5, 5, -9]}
      />
    </AccumulativeShadows>
  )
}

type CameraRigProps = {
  children?: ReactNode
}

function CameraRig({ children }: CameraRigProps) {
  const group = useRef<Group>(null)
  const snap = useSnapshot(state)
  useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [snap.intro ? -state.viewport.width / 4 : 0, 0, 2],
      0.25,
      delta,
    )
    group.current?.rotation &&
      easing.dampE(
        group.current.rotation,
        [state.pointer.y / 10, -state.pointer.x / 5, 0],
        0.25,
        delta,
      )
  })
  return <group ref={group}>{children}</group>
}

type ShirtProps = Partial<MeshProps>

type GLTFBook = GLTF & {
  nodes: {
    magazine_01_cover89: THREE.Mesh
  }
  materials: {
    magazine_01_cover89: THREE.MeshStandardMaterial
  }
}

function Shirt(props: ShirtProps) {
  const snap = useSnapshot(state)

  const bookCoverTexture = useTexture(`/@shirt/${snap.decal}.png`)

  const texture = useTexture(`/@shirt/${snap.decal}.png`)
  // const { nodes, materials } = useGLTF("/@shirt/shirt_baked_collapsed.glb")
  // useFrame((state, delta) =>
  //   easing.dampC(materials.lambert1.color, snap.color, 0.25, delta),
  // )

  /**
   * Fix glb model
   * @link https://github.com/pmndrs/gltfjsx#readme
   */
  const { nodes, materials } = useGLTF(
    "/@shirt/book.glb",
  ) as unknown as GLTFBook
  useFrame((state, delta) =>
    easing.dampC(materials.magazine_01_cover89.color, snap.color, 0.25, delta),
  )

  const textureDrawing = useTexture(
    "/images/sitchenko-infant-drawing-bw.png",
    (props) => {
      const texture = castArray(props)[0]

      // texture.rotation = 0.2
      texture.repeat.set(2, 1)
    },
  )

  // textureDrawing.center = new Vector2(0, 0)

  // const textureDrawing = new THREE.TextureLoader().load( "/images/sitchenko-infant-drawing-bw.png" );
  // textureDrawing.wrapS = THREE.RepeatWrapping;
  // textureDrawing.wrapT = THREE.RepeatWrapping;
  // textureDrawing.repeat.set( 4, 4 );

  materials.magazine_01_cover89.map = textureDrawing

  return (
    <mesh
      castShadow
      // geometry={nodes.T_Shirt_male.geometry}
      // material={materials.lambert1}
      geometry={nodes.magazine_01_cover89.geometry}
      material={materials.magazine_01_cover89}
      // map={textureDrawing}
      material-roughness={1}
      {...props}
      dispose={null}
      rotation={[0, Math.PI / 2, 0]}
      scale={1.5}
    >
      {/* <Decal
        position={[0, 0.04, 0.15]}
        rotation={[0, 0, 0]}
        scale={0.15}
        map={texture}
        map-anisotropy={16}
      /> */}
    </mesh>
  )
}

useGLTF.preload("/@shirt/book.glb")
useGLTF.preload("/@shirt/shirt_baked_collapsed.glb")
;["/@shirt/react.png", "/@shirt/three2.png", "/@shirt/pmndrs.png"].forEach(
  useTexture.preload,
)
