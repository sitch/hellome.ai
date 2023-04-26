import classnames from "classnames"

import styles from "./PageFlipBook.module.css"

// Source: https://cssdeck.com/labs/pure-css3-page-flip-effect
export function PageFlipBook() {
  return (
    <>
      <div id="all">
        <div id="page-flip">
          <div id="r1">
            <div id="p1">
              <div>
                <div></div>
              </div>
            </div>
          </div>
          <div id="p2">
            <div></div>
          </div>
          <div id="r3">
            <div id="p3">
              <div>
                <div></div>
              </div>
            </div>
          </div>
          <div className={styles.s}>
            <div id="s3">
              <div id="sp3"></div>
            </div>
          </div>
          <div className={styles.s} id="s4">
            <div id="s2">
              <div id="sp2"></div>
            </div>
          </div>
          <a
            className="link"
            id="rightPageTopLink"
            href="#"
            title="rightPageTopLink"
          ></a>
          <a
            className="link"
            id="rightPageBottomLink"
            href="#"
            title="rightPageBottomLink"
          ></a>
        </div>
      </div>
    </>
  )
}
