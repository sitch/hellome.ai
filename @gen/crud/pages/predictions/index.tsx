import React from "react"
import { Prediction } from "@prisma/client"

import { prisma } from "../../lib/prisma"

interface PredictionIndexProps {
  predictions: Prediction[]
}

export default function PredictionIndex({ predictions }: PredictionIndexProps) {
  function handleDelete(id: string) {
    fetch(`/api/predictions/${id}`, { method: "DELETE" }).then(() => {
      alert("Prediction deleted")
      location.reload()
    })
  }

  return (
    <>
      <header>
        <h1>All Predictions</h1>
        <a href="/predictions/create" className="secondary-btn">
          + Create new prediction
        </a>
      </header>
      <div className="table">
        <div className="row header">
          <div className="cell">Uuid</div>
          <div className="cell">Input</div>
          <div className="cell">Output</div>
          <div className="cell">Status</div>
          <div className="cell">Created_at</div>
          <div className="cell">Started_at</div>
          <div className="cell">Completed_at</div>
          <div className="cell">Version</div>
          <div className="cell">Metrics</div>
          <div className="cell">Error</div>
          <div className="cell">Logs</div>
          <div className="cell">Actions</div>
        </div>
        {predictions.map((prediction) => (
          <div className="row" key={prediction.id}>
            <div className="cell" data-title="uuid">
              {prediction.uuid}
            </div>
            <div className="cell" data-title="input">
              {prediction.input}
            </div>
            <div className="cell" data-title="output">
              {prediction.output}
            </div>
            <div className="cell" data-title="status">
              {prediction.status}
            </div>
            <div className="cell" data-title="created_at">
              {prediction.created_at}
            </div>
            <div className="cell" data-title="started_at">
              {prediction.started_at}
            </div>
            <div className="cell" data-title="completed_at">
              {prediction.completed_at}
            </div>
            <div className="cell" data-title="version">
              {prediction.version}
            </div>
            <div className="cell" data-title="metrics">
              {prediction.metrics}
            </div>
            <div className="cell" data-title="error">
              {prediction.error}
            </div>
            <div className="cell" data-title="logs">
              {prediction.logs}
            </div>
            <div className="cell actions" data-title="actions">
              <div className="action-buttons">
                <a
                  href={`predictions/${prediction.id}`}
                  className="secondary-btn small"
                >
                  &#128065; Show
                </a>
                <a
                  href={`predictions/${prediction.id}/edit`}
                  className="secondary-btn small"
                >
                  &#9998; Edit
                </a>
                <a
                  href="#"
                  onClick={() => handleDelete(prediction.id)}
                  className="secondary-btn small danger"
                >
                  &#128465; Delete
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <footer>
        <a href="/" className="secondary-btn">
          Return to Dashboard
        </a>
      </footer>
    </>
  )
}

export async function getServerSideProps() {
  const predictions = await prisma.prediction.findMany()
  return { props: { predictions } }
}
