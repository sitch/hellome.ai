import type { Config } from "@vladmandic/human"

export const config: Partial<Config> = {
  debug: false,
  modelBasePath: "https://cdn.jsdelivr.net/npm/@vladmandic/human/models",
  // face: { enabled: true },
  body: { enabled: false },
  hand: { enabled: true },
  object: { enabled: false },
  // added
  // console: true,      // log messages to browser console
  // useWorker: true,    // use web workers for processing
  // buffered: true,     // should output be buffered between frames
  // interpolated: true, // should output be interpolated for smoothness between frames
  // results: false,     // show results tree
  // useWebRTC: false,   // use webrtc as camera source instead of local webcam

  backend: "humangl",
  // backend: 'webgpu',

  deallocate: true,

  async: true,
  gesture: { enabled: false },
  face: {
    enabled: true,
    mesh: { enabled: true },
    description: { enabled: true },
    detector: {
      // maxDetected: 1,
      rotation: false,
      // See: https://github.com/vladmandic/human/issues/300
      // See: https://github.com/vladmandic/human/issues/257
      return: true,
    },
  },

  // filter: { enabled: true, equalization: false, flip: false },
  // face: { enabled: true, detector: { rotation: true }, mesh: { enabled: true }, attention: { enabled: false }, iris: { enabled: true }, description: { enabled: true }, emotion: { enabled: true }, antispoof: { enabled: true }, liveness: { enabled: true } },
  // body: { enabled: true },
  // // hand: { enabled: true },
  // hand: { enabled: false },
  // object: { enabled: false },
  // segmentation: { enabled: false },
  // gesture: { enabled: true },
}
