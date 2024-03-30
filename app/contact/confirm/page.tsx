import ContactConfirm from '@/components/contact/contactConfirm'

function Confirm() {
  return (
    <>
      <h1 className="flex justify-center text-2xl md:text-4xl my-10">
        Contact
      </h1>
      <div className="flex justify-center">
        <ContactConfirm />
      </div>
    </>
  )
}

export default Confirm
