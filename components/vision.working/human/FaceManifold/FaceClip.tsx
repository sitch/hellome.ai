import { FaceResult, Human } from '@vladmandic/human'
import * as React from 'react'
import { ManifoldVector } from '../manifolds'

export type FaceClipProps = {
  human: Human | undefined
  name: string
  face?: FaceResult | null | undefined
  canvas?: HTMLCanvasElement
  onError: <T>(error: unknown, face: FaceResult) => Promise<T | void>
}

class FaceClip extends React.Component<FaceClipProps> {
  canvas: React.RefObject<HTMLCanvasElement>

  constructor(props: FaceClipProps) {
    super(props)
    this.canvas = React.createRef()
  }

  // UNSAFE_componentWillMount() {
  //   const canvas = document.createElement('canvas')
  //   const context = canvas.getContext('2d')
  //   canvas.width = 256
  //   canvas.height = 256
  //   context!.rect(20, 20, 150, 100)
  //   context!.stroke()
  //   const image = context!.getImageData(0, 0, canvas.width, canvas.height)
  //   this.setState({ image })
  // }

  async componentDidMount() {
    const { human, face, onError } = this.props

    if (
      human &&
      face?.tensor &&
      !face.tensor.isDisposed &&
      this.canvas.current
    ) {
      try {
        face.tensor.isDisposed

        await human.tf.browser.toPixels(face.tensor, this.canvas.current)
      } catch (error) {
        onError(error, face)
      }

      // const [_x, _y, width, height ] = face.box
      // const bytes = await human.tf.browser.toPixels(face.tensor)
      // this.canvas.current.width = width;
      // this.canvas.current.height = height;
      // const ctx = this.canvas.current.getContext('2d');
      // const imageData = new ImageData(bytes, width, height);
      // ctx!.putImageData(imageData, 0, 0);
    }
  }

  async componentDidUpdate() {
    this.componentDidMount()
  }

  // async componentWillUnmount() {
  //   const { human, face } = this.props

  //   if (human && face?.tensor) {
  //     await human!.tf.dispose(face.tensor)
  //   }
  // }

  render() {
    const { human, face, name } = this.props

    // if (face) {
    //   return (
    //     <div>
    //       {name}
    //       {/* {JSON.stringify(face.tensor)} */}
    //       <canvas id={name} ref={this.canvas} />
    //     </div>
    //   )
    // }

    // console.warn(`Found no face`, face)
    // return <div>{name}</div>

    return (
      <div>
        {name}
        {/* {JSON.stringify(face.tensor)} */}
        <canvas
          // id={name}
          ref={this.canvas}
        />
      </div>
    )
  }
}

// export async function FaceClip({ name, face, canvas }: FaceClipProps) {
//   if (face && canvas) {
//     // face tensor as a flat array
//     const data = await face!.tensor!.data()

//     // 3d array
//     const data3d = await face!.tensor!.array()

//     // human.tf.dispose(face.tensor);

//     const [x, y, width, height] = face.box

//     const context = canvas!.getContext('2d')
//     const imageData = context?.getImageData(x, y, width, height)

//     const processedResult = {
//       imageData,
//       face,
//     }

//     const image = new Image()
//   }

//   console.warn(`Found no face`, face)
//   return (
//     <div>
//       {name}
//       {/* {JSON.stringify(face)} */}
//     </div>
//   )
// }

export default FaceClip
