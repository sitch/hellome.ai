import styles from "./index.module.css"

export default function AppLoading() {
  return (
    <div id="app-loading" className={styles.container}>
      <div className={styles.loader}></div>
      <h2 className={styles.heading}>Loading...</h2>
      <p className={styles.description}>
        This may take a few seconds, please don't close this page.
      </p>
    </div>
  )
}

// export default function AppLoading() {
//   return (
//     <div id="app-loading" className="min-w-screen flex min-h-screen items-center justify-center bg-gray-100 p-5">
//       <div className="flex animate-pulse space-x-2">
//         <div className="h-3 w-3 rounded-full bg-gray-500"></div>
//         <div className="h-3 w-3 rounded-full bg-gray-500"></div>
//         <div className="h-3 w-3 rounded-full bg-gray-500"></div>
//       </div>
//     </div>
//   )
// }
