import { useState } from 'react'

function useMail() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [title, setTitle] = useState('')
  const [message, setMessage] = useState('')

  const send = async () => {
    await fetch('/api/send', {
      method: 'POST',
      body: JSON.stringify({ name, email, title, message }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }

  return {
    setName,
    setEmail,
    setTitle,
    setMessage,
    send,
  }
}

export default useMail
