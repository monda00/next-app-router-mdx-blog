import { NextResponse, NextRequest } from 'next/server'
import { Resend } from 'resend'
import EmailTemplate from '@/components/emailTemplate'

const resend = new Resend(process.env.RESEND_API_KEY)

interface BodyType {
  name: string
  email: string
  title: string
  message: string
}

export async function POST(request: NextRequest) {
  try {
    const body: BodyType = await request.json()
    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'thisismail@mail',
      subject: body.title,
      react: EmailTemplate({
        inquirerName: body.name,
        inquirerEmail: body.email,
        message: body.message,
      }),
    })

    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json({ error })
  }
}
