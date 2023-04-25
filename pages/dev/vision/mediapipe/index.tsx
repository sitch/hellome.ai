import styles from './index.module.css'
// import { Layout } from '@/components/common'
// import MediaPipeDemo from '@/components/vision/mediapipe/MediapipeDemo'
// import  FaceFilter  from '@/components/vision/FaceFilter'
import dynamic from 'next/dynamic'

// See: https://github.com/google/mediapipe/issues/2546
const FaceFilter = dynamic(
  () => import('@/components/vision/mediapipe/FaceFilter'),
  {
    ssr: false,
  }
)

const AlterBackground = dynamic(
  () => import('@/components/vision/mediapipe/AlterBackground'),
  {
    ssr: false,
  }
)

export default function Index() {
  return (
    <>
      <FaceFilter />
      <AlterBackground />

      {/* <div className={styles.container}>
    <video className={styles.input_video}></video>
    <div className={`${styles.canvas} ${styles.container}`}>
    <canvas className={styles.output_canvas} width="1280px" height="720px">
    </canvas>
    </div>
    <div className={styles.loading}>
      <div className={styles.spinner}></div>
      <div className={styles.message}>
        Loading
      </div>
    </div>
    <div className={styles.shoutout}>
      <div>
        <a href="https://solutions.mediapipe.dev/face_mesh">
          Click here for more info
        </a>
      </div>
    </div>
  </div>
  <div className={`${styles.control} ${styles.panel}`}>
  </div>

<MediaPipeDemo /> */}
    </>
  )
}

// Index.Layout = Layout
