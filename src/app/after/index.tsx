'use client'
import React from 'react'

import { submit } from './action.server'

function After() {
  const [message, setMessage] = React.useState('')

  async function handleSubmission(formData: FormData) {
    const { message } = await submit(formData)
    setMessage(message ?? '')
  }
  return (
    <form>
      <code>Server Actions</code>
      <h1>Favorite Pet</h1>
      <div>
        <label htmlFor="pet" style={{ display: 'block' }}>
          Enter your favorite pet name.
        </label>
        <input required name="pet" id="pet" />
      </div>
      <button type="submit" formAction={handleSubmission}>
        Submit
      </button>
      <p>{message}</p>
    </form>
  )
}

export default After
