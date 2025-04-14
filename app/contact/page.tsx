import ContactForm from '@/components/contact/contactForm'

function Contact() {
  return (
    <>
      <h1 className="flex justify-center text-2xl md:text-4xl font-extrabold my-10">
        Contact
      </h1>
      <div className="flex justify-center">
        <ContactForm />
      </div>
    </>
  )
}

export default Contact
