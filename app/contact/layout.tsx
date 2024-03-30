'use client'

import { FormProvider, useForm } from 'react-hook-form'
import type { FormInputs } from '@/types/contact'

export default function Layout({ children }: { children: React.ReactNode }) {
  const methods = useForm<FormInputs>({
    mode: 'onBlur',
  })

  return (
    <FormProvider {...methods}>
      <div className="w-80 md:w-180 pb-10 mx-auto">{children}</div>
    </FormProvider>
  )
}
