import classnames from 'classnames'
import styles from './AnimatedBook.module.css'

// Source: https://codemyui.com/pure-css-page-turning-animation-for-images/
// Codepen: https://codepen.io/amit_sheen/pen/WNweryv
export function AnimatedBook() {
  return (
    <>
      <div className={styles.imgLoader}></div>

      <div className={styles.container}>
        {/* <h1 className={styles.title}>
          Turning pages
          <br />
          with css
        </h1> */}

        {/* <div className={styles.credit}>
          * Images loaded randomly from Pic sum.photos
        </div> */}

        <div className={styles.book}>
          <div className={styles.gap}></div>
          <div className={styles.pages}>
            <div className={styles.page}></div>
            <div className={styles.page}></div>
            <div className={styles.page}></div>
            <div className={styles.page}></div>
            <div className={styles.page}></div>
            <div className={styles.page}></div>
          </div>

          <div className={styles.flips}>
            <div className={classnames([styles.flip, styles.flip1])}>
              <div className={classnames([styles.flip, styles.flip2])}>
                <div className={classnames([styles.flip, styles.flip3])}>
                  <div className={classnames([styles.flip, styles.flip4])}>
                    <div className={classnames([styles.flip, styles.flip5])}>
                      <div className={classnames([styles.flip, styles.flip6])}>
                        <div
                          className={classnames([styles.flip, styles.flip7])}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <a
        href="https://twitter.com/amit_sheen"
        className={styles.twitterLink}
        target="_top"
      >
        <img src="https://assets.codepen.io/1948355/twitterLogo2.png" />
      </a> */}
    </>
  )
}
