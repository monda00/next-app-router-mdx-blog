interface EmailTemplateProps {
  inquirerName: string
  inquirerEmail: string
  message: string
}

function EmailTemplate({
  inquirerName,
  inquirerEmail,
  message,
}: EmailTemplateProps) {
  return (
    <div>
      <h1>New message from {inquirerName}</h1>
      <p>{inquirerEmail}</p>
      <p>{message}</p>
    </div>
  )
}

export default EmailTemplate
