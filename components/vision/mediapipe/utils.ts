export const getRecordingOptions = (
  forMediarecorder = false
): MediaRecorderOptions | BlobPropertyBag => {
  const options = { mimeType: 'video/webm' }
  if (typeof MediaRecorder.isTypeSupported === 'function') {
    if (MediaRecorder.isTypeSupported('video/webm')) {
      return forMediarecorder
        ? {
            mimeType: 'video/webm;codecs=vp8,opus',
          }
        : {
            type: 'video/webm',
          }
    } else if (MediaRecorder.isTypeSupported('video/mp4')) {
      return forMediarecorder
        ? { mimeType: 'video/mp4' }
        : { type: 'video/mp4' }
    }
  }
  return options
}
