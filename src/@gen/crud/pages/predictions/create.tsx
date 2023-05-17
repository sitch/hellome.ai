import React, { FormEvent, useState } from "react"
import { useRouter } from "next/router"

export default function PredictionCreate() {
  const [formState, setFormState] = useState({
    uuid: "",
    input: "",
    output: "",
    status: "",
    created_at: "",
    started_at: "",
    completed_at: "",
    version: "",
    metrics: "",
    error: "",
    logs: "",
  })
  const router = useRouter()

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    fetch("/api/predictions", {
      method: "POST",
      body: JSON.stringify(formState),
    }).then((res) => {
      if (res.ok) {
        alert("Prediction created!")
        router.push("/predictions")
      }
    })
  }

  return (
    <>
      <header>
        <h1>Create Prediction</h1>
      </header>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="uuid">Uuid:</label>
          <input
            type="text"
            id="uuid"
            value={formState.uuid}
            onChange={(e) =>
              setFormState({ ...formState, uuid: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="input">Input:</label>
          <input
            type="text"
            id="input"
            value={formState.input}
            onChange={(e) =>
              setFormState({ ...formState, input: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="output">Output:</label>
          <input
            type="text"
            id="output"
            value={formState.output}
            onChange={(e) =>
              setFormState({ ...formState, output: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="status">Status:</label>
          <input
            type="text"
            id="status"
            value={formState.status}
            onChange={(e) =>
              setFormState({ ...formState, status: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="created_at">Created_at:</label>
          <input
            type="text"
            id="created_at"
            value={formState.created_at}
            onChange={(e) =>
              setFormState({ ...formState, created_at: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="started_at">Started_at:</label>
          <input
            type="text"
            id="started_at"
            value={formState.started_at}
            onChange={(e) =>
              setFormState({ ...formState, started_at: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="completed_at">Completed_at:</label>
          <input
            type="text"
            id="completed_at"
            value={formState.completed_at}
            onChange={(e) =>
              setFormState({ ...formState, completed_at: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="version">Version:</label>
          <input
            type="text"
            id="version"
            value={formState.version}
            onChange={(e) =>
              setFormState({ ...formState, version: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="metrics">Metrics:</label>
          <input
            type="text"
            id="metrics"
            value={formState.metrics}
            onChange={(e) =>
              setFormState({ ...formState, metrics: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="error">Error:</label>
          <input
            type="text"
            id="error"
            value={formState.error}
            onChange={(e) =>
              setFormState({ ...formState, error: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="logs">Logs:</label>
          <input
            type="text"
            id="logs"
            value={formState.logs}
            onChange={(e) =>
              setFormState({ ...formState, logs: e.target.value })
            }
          />
        </div>
        <footer>
          <button type="submit" className="primary-btn">
            Create
          </button>
          <a href="/predictions" className="secondary-btn">
            Return to predictions list
          </a>
        </footer>
      </form>
    </>
  )
}
