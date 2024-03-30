import { FaCheckCircle } from 'react-icons/fa'
import { CustomIcon } from '@/components/ui/customIcon'
import LinkButton from '@/components/ui/linkButton'

function SuccessPage() {
  return (
    <div className="my-20">
      <h1 className="flex justify-center text-2xl md:text-4xl my-10">
        <div className="text-success mr-5">
          <CustomIcon icon={FaCheckCircle} size={40} />
        </div>
        Thank your for your inquiry.
      </h1>
      <p className="flex justify-center">
        I will contact you as soon as possible.
      </p>
      <p className="flex justify-center">
        <LinkButton link="/">Back to Home</LinkButton>
      </p>
    </div>
  )
}

export default SuccessPage
