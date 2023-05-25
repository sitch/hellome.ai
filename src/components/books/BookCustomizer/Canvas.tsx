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

import { Book2Mesh } from "@/@gen/meshes/Book2Mesh"
import { CharacterMesh } from "@/@gen/meshes/CharacterMesh"

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
    gl={{ preserveDrawingBuffer: true }}
    eventSource={document.getElementById("root") ?? undefined}
    eventPrefix="client"
  >
    <ambientLight intensity={0.5} />
    <Environment preset="sunset" />
    <CameraRig>
      <Backdrop />
      <Center>
        {/* <Book /> */}

        <Book2Mesh />
        <CharacterMesh />
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
      snap.page === "intro" ? [-state.viewport.width / 4, 0, 2.5] : [0, 0, 2.5],
      0.25,
      delta,
    )
    group.current?.rotation &&
      easing.dampE(
        group.current.rotation,
        [state.pointer.y / 4, -state.pointer.x / 2, 0],
        0.25,
        delta,
      )
  })
  return <group ref={group}>{children}</group>
}

// type BookProps = Partial<MeshProps>

// type GLTFBook = GLTF & {
//   nodes: {
//     magazine_01_cover89: THREE.Mesh
//   }
//   materials: {
//     magazine_01_cover89: THREE.MeshStandardMaterial
//   }
// }

// export function Book(props: BookProps) {
//   const snap = useSnapshot(state)

//   const bookCoverTexture = useTexture(`/@meshes/${snap.decal}.png`)

//   const texture = useTexture(`/@meshes/${snap.decal}.png`)
//   // const { nodes, materials } = useGLTF("/@meshes/shirt_baked_collapsed.glb")
//   // useFrame((state, delta) =>
//   //   easing.dampC(materials.lambert1.color, snap.color, 0.25, delta),
//   // )

//   /**
//    * Fix glb model
//    * @link https://github.com/pmndrs/gltfjsx#readme
//    */
//   const { nodes, materials } = useGLTF(
//     "/@meshes/book.glb",
//   ) as unknown as GLTFBook
//   useFrame((state, delta) =>
//     easing.dampC(materials.magazine_01_cover89.color, snap.color, 0.25, delta),
//   )

//   const textureDrawing = useTexture(
//     "/images/sitchenko-infant-drawing-bw.png",
//     (props) => {
//       const texture = castArray(props)[0]

//       // texture.rotation = 0.2
//       texture.repeat.set(2, 1)
//     },
//   )

//   // textureDrawing.center = new Vector2(0, 0)

//   // const textureDrawing = new THREE.TextureLoader().load( "/images/sitchenko-infant-drawing-bw.png" );
//   // textureDrawing.wrapS = THREE.RepeatWrapping;
//   // textureDrawing.wrapT = THREE.RepeatWrapping;
//   // textureDrawing.repeat.set( 4, 4 );

//   materials.magazine_01_cover89.map = textureDrawing

//   return (
//     <mesh
//       castShadow
//       // geometry={nodes.T_Shirt_male.geometry}
//       // material={materials.lambert1}
//       geometry={nodes.magazine_01_cover89.geometry}
//       material={materials.magazine_01_cover89}
//       // map={textureDrawing}
//       material-roughness={1}
//       {...props}
//       dispose={null}
//       rotation={[0, Math.PI / 2, 0]}
//       scale={1.5}
//     >
//       {/* <Decal
//         position={[0, 0.04, 0.15]}
//         rotation={[0, 0, 0]}
//         scale={0.15}
//         map={texture}
//         map-anisotropy={16}
//       /> */}
//     </mesh>
//   )
// }

// useGLTF.preload("/@meshes/book.glb")
// useGLTF.preload("/@meshes/shirt_baked_collapsed.glb")
// ;["/@meshes/react.png", "/@meshes/three2.png", "/@meshes/pmndrs.png"].forEach(
//   useTexture.preload,
// )
