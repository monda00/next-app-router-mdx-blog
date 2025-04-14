'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { SendMail } from '@/libs/contact'
import type { FormInputs } from '@/types/contact'

function ContactConfirm() {
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const { getValues, handleSubmit } = useFormContext()
  const values = getValues()

  const onSubmit = handleSubmit(async (data) => {
    try {
      setError(false)
      setLoading(true)
      const response = await SendMail(data as FormInputs)

      if (response.ok) {
        setError(false)
        router.push('/contact/success')
      } else {
        setError(true)
      }
    } catch (err) {
      setError(true)
      console.error(err)
    } finally {
      setLoading(false)
    }
  })

  return (
    <form onSubmit={onSubmit}>
      <table className="table-sm md:table-lg table-zebra text-base-content w-80 md:w-160 mx-auto">
        <tbody>
          <tr>
            <th>Name</th>
            <td>{values.name}</td>
          </tr>
          <tr>
            <th>Mail</th>
            <td>{values.email}</td>
          </tr>
          <tr>
            <th>Title</th>
            <td>{values.title}</td>
          </tr>
          <tr>
            <th>Message</th>
            <td>{values.message}</td>
          </tr>
        </tbody>
      </table>
      <div className="flex justify-center">
        <button
          type="button"
          className="btn btn-neutral rounded-xl m-5"
          onClick={() => router.push('/contact')}
        >
          Back
        </button>
        <button type="submit" className="btn btn-accent rounded-xl m-5">
          {loading && <span className="loading loadingspinner"></span>}
          {loading ? 'Sending...' : 'Send'}
        </button>
      </div>
      {error && (
        <p className="text-center text-error">
          Sorry, an error occurred while sending your message. Please try again
          later.
        </p>
      )}
    </form>
  )
}

export default ContactConfirm
