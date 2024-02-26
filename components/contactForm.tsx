'use client'

import { FaUser } from 'react-icons/fa'
import { MdTitle, MdEmail } from 'react-icons/md'
import useMail from '../hooks/useMail'
import { CustomIcon } from './custom-icon'

function ContactForm() {
  const { setName, setEmail, setTitle, setMessage, send } = useMail()

  return (
    <form onSubmit={send} className="flex flex-col justify-center w-128">
      <label className="input input-bordered flex items-center gap-2 my-3">
        <CustomIcon icon={FaUser} size={20} />
        <input
          type="text"
          className="grow"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label className="input input-bordered flex items-center gap-2 my-3">
        <CustomIcon icon={MdEmail} size={20} />
        <input
          type="text"
          className="grow"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label className="input input-bordered flex items-center gap-2 my-3">
        <CustomIcon icon={MdTitle} size={20} />
        <input
          type="text"
          className="grow"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <label className="my-3">
        <textarea
          className="textarea textarea-bordered w-full"
          placeholder="Message"
          onChange={(e) => setMessage(e.target.value)}
        />
      </label>
      <br />
      <button type="submit" className="btn btn-primary rounded-xl mx-10">
        Submit
      </button>
    </form>
  )
}

export default ContactForm
