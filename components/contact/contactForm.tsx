'use client'

import { useRouter } from 'next/navigation'
import { useFormContext } from 'react-hook-form'
import { FaUser } from 'react-icons/fa'
import { FaRegMessage } from 'react-icons/fa6'
import { MdTitle, MdEmail } from 'react-icons/md'
import { CustomIcon } from '@/components/ui/customIcon'
import type { FormInputs } from '@/types/contact'

function ContactForm() {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useFormContext<FormInputs>()

  const onSubmit = handleSubmit(async () => {
    router.push('/contact/confirm')
  })

  return (
    <form onSubmit={onSubmit} className="flex flex-col justify-center w-128">
      <label className="form-control w-full">
        <div className="label py-2">
          <span className="label-text flex items-center text-base">
            <CustomIcon icon={FaUser} size={24} className="mr-2" />
            Name
            <span className="text-error text-2xl font-bold ml-1"> * </span>
          </span>
        </div>
        <input
          {...register('name', { required: 'Required' })}
          type="text"
          className="input input-bordered w-full m-0 px-4 py-2 mb-4"
        />
      </label>
      {errors.name && <p className="text-error mt-0">{errors.name.message}</p>}
      <label className="form-control w-full">
        <div className="label py-2">
          <span className="label-text flex items-center text-base">
            <CustomIcon icon={MdEmail} size={24} className="mr-2" />
            Mail Address
            <span className="text-error text-2xl font-bold ml-1"> * </span>
          </span>
        </div>
        <input
          {...register('email', {
            required: 'Required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Please input mail address correctly',
            },
          })}
          type="text"
          className="input input-bordered w-full m-0 px-4 py-2 mb-4"
        />
      </label>
      {errors.email && (
        <p className="text-error mt-0">{errors.email.message}</p>
      )}
      <label className="form-control w-full">
        <div className="label py-2">
          <span className="label-text flex items-center text-base">
            <CustomIcon icon={MdTitle} size={24} className="mr-2" />
            Title
            <span className="text-error text-2xl font-bold ml-1"> * </span>
          </span>
        </div>
        <input
          {...register('title', { required: 'Required' })}
          type="text"
          className="input input-bordered w-full m-0 px-4 py-2 mb-4"
        />
      </label>
      {errors.title && (
        <p className="text-error mt-0">{errors.title.message}</p>
      )}
      <label className="form-control w-full">
        <div className="label py-2">
          <span className="label-text flex items-center text-base">
            <CustomIcon icon={FaRegMessage} size={24} className="mr-2" />
            Message
            <span className="text-error text-2xl font-bold ml-1"> * </span>
          </span>
        </div>
        <textarea
          {...register('message', { required: 'Required' })}
          className="textarea textarea-bordered w-full px-4 py-2"
        />
      </label>
      {errors.message && (
        <p className="text-error mt-0">{errors.message.message}</p>
      )}
      <br />
      <button
        type="submit"
        className="btn btn-primary text-base-100 rounded-xl mx-10"
      >
        Confirm
      </button>
    </form>
  )
}

export default ContactForm
