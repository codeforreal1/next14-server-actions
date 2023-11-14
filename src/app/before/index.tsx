'use client'

import React from 'react'

function Before() {
  const [pet, setPet] = React.useState('')
  const [message, setMessage] = React.useState('')

  async function handleFormSubmission(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    try {
      const response = await fetch('/api/pet', {
        method: 'POST',
        body: JSON.stringify({ pet }),
      })

      const data = await response.json()
      setMessage(data.message ?? '')
      if (data?.success) {
        setPet('')
      }
    } catch (_) {
      // Handler error here
    }
  }
  return (
    <form onSubmit={handleFormSubmission}>
      <code>No Server Actions</code>
      <h1>Favorite Pet</h1>
      <div>
        <label htmlFor="pet" style={{ display: 'block' }}>
          Enter your favorite pet name.
        </label>
        <input
          required
          name="pet"
          id="pet"
          value={pet}
          onChange={(evt) => {
            setPet(evt.target.value)
          }}
        />
      </div>
      <button type="submit">Submit</button>
      <p>{message}</p>
    </form>
  )
}

export default Before
