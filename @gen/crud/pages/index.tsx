import React from "react"

export default function Dashboard() {
  return (
    <>
      <header>
        <h1>Dashboard</h1>
      </header>
      <div className="table">
        <div className="row header">
          <div className="cell">Resource</div>
        </div>

        <div className="row">
          <div className="cell" data-title="resource">
            <a href="cloudfiles">CloudFiles</a>
          </div>
        </div>

        <div className="row">
          <div className="cell" data-title="resource">
            <a href="photos">Photos</a>
          </div>
        </div>

        <div className="row">
          <div className="cell" data-title="resource">
            <a href="pdfs">PDFs</a>
          </div>
        </div>

        <div className="row">
          <div className="cell" data-title="resource">
            <a href="users">Users</a>
          </div>
        </div>

        <div className="row">
          <div className="cell" data-title="resource">
            <a href="authors">Authors</a>
          </div>
        </div>

        <div className="row">
          <div className="cell" data-title="resource">
            <a href="artists">Artists</a>
          </div>
        </div>

        <div className="row">
          <div className="cell" data-title="resource">
            <a href="translators">Translators</a>
          </div>
        </div>

        <div className="row">
          <div className="cell" data-title="resource">
            <a href="storys">Storys</a>
          </div>
        </div>

        <div className="row">
          <div className="cell" data-title="resource">
            <a href="pageartworks">PageArtworks</a>
          </div>
        </div>

        <div className="row">
          <div className="cell" data-title="resource">
            <a href="pagetexts">PageTexts</a>
          </div>
        </div>

        <div className="row">
          <div className="cell" data-title="resource">
            <a href="pages">Pages</a>
          </div>
        </div>

        <div className="row">
          <div className="cell" data-title="resource">
            <a href="editions">Editions</a>
          </div>
        </div>

        <div className="row">
          <div className="cell" data-title="resource">
            <a href="concepts">Concepts</a>
          </div>
        </div>

        <div className="row">
          <div className="cell" data-title="resource">
            <a href="predictions">Predictions</a>
          </div>
        </div>
      </div>
    </>
  )
}
