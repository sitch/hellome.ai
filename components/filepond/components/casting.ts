// https://github.com/pqina/filepond/issues/192
export const castInitialFile = (url: string) => {
  return {
    source: url,
    options: {
      type: "local",
    },
  }
}
