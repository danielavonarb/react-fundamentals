// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  //const [error, setError] = React.useState(null)
  const [username, setUsername] = React.useState('')

  function handleSubmit(event) {
    event.preventDefault()
    // onSubmitUsername(event.target.elements.usernameInput.value)
    onSubmitUsername(username)
  }

  function handleChange(event) {
    const {value} = event.target
    // const isLowerCase = value === value.toLowerCase()
    // setError(isLowerCase ? null : 'Username must be lower case')
    setUsername(value.toLowerCase())
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input
          id="usernameInput"
          type="text"
          onChange={handleChange}
          value={username}
        />
      </div>
      {/* <div style={{color: 'red'}}>{error}</div>
      <button disabled={Boolean(error)} type="submit">
        Submit
      </button> */}
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
