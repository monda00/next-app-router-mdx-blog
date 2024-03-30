import type { FormInputs } from '@/types/contact'

export async function SendMail(data: FormInputs) {
  const response = await fetch('/api/send', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
    next: {
      revalidate: 3600,
    },
  })
  return response
}
