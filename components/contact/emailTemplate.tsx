interface EmailTemplateProps {
  inquirerName: string
  inquirerEmail: string
  title: string
  message: string
}

function EmailTemplate({
  inquirerName,
  inquirerEmail,
  title,
  message,
}: EmailTemplateProps) {
  return (
    <div>
      <h1>New message from {inquirerName}</h1>
      <h2>{title}</h2>
      <p>{inquirerEmail}</p>
      <p>{message}</p>
    </div>
  )
}

export default EmailTemplate
