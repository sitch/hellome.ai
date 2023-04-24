import React from 'react'
import { prisma } from '../../../lib/prisma'
import { Prediction } from '@prisma/client'

interface PredictionShowProps {
  prediction: Prediction
}

export default function PredictionShow({ prediction }: PredictionShowProps) {
  return (
    <>
      <header>
        <h1>Prediction #{prediction.id.substr(0, 6)}...</h1>
      </header>
      <div className="card">
        <p>
          <strong>Uuid:</strong> {prediction.uuid}
        </p>
        <p>
          <strong>Input:</strong> {prediction.input}
        </p>
        <p>
          <strong>Output:</strong> {prediction.output}
        </p>
        <p>
          <strong>Status:</strong> {prediction.status}
        </p>
        <p>
          <strong>Created_at:</strong> {prediction.created_at}
        </p>
        <p>
          <strong>Started_at:</strong> {prediction.started_at}
        </p>
        <p>
          <strong>Completed_at:</strong> {prediction.completed_at}
        </p>
        <p>
          <strong>Version:</strong> {prediction.version}
        </p>
        <p>
          <strong>Metrics:</strong> {prediction.metrics}
        </p>
        <p>
          <strong>Error:</strong> {prediction.error}
        </p>
        <p>
          <strong>Logs:</strong> {prediction.logs}
        </p>
      </div>
      <footer>
        <a href="/predictions" className="secondary-btn">
          Return to predictions list
        </a>
      </footer>
    </>
  )
}

export async function getServerSideProps({ params }) {
  const prediction = await prisma.prediction.findUnique({
    where: { id: params.id },
  })
  return { props: { prediction } }
}
