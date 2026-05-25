import { useState } from 'react'

function App() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [fullName, setFullName] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    setFullName(`${firstName.trim()} ${lastName.trim()}`.trim())
  }

  return (
    <main className="app-shell">
      <section className="card">
        <h1>Full Name Display</h1>
        <p className="subtitle">Fill in both fields and submit to see your full name.</p>

        <form onSubmit={handleSubmit} className="name-form">
          <label>
            First name
            <input
              type="text"
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
              required
              placeholder="John"
            />
          </label>

          <label>
            Last name
            <input
              type="text"
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
              required
              placeholder="Doe"
            />
          </label>

          <button type="submit">Submit</button>
        </form>

        {fullName && (
          <div className="result-box" aria-live="polite">
            <p>Full Name: {fullName}</p>
          </div>
        )}
      </section>
    </main>
  )
}

export default App
