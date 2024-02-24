import Image from 'next/image'
import Link from 'next/link'
import { FaGithub } from 'react-icons/fa'
import { CustomIcon } from './custom-icon'

function ProfileCard() {
  return (
    <div className="bg-base-200 w-72 rounded-box">
      <div className="flex flex-col justify-center pt-5">
        <Image
          src="/author.webp"
          width={100}
          height={100}
          alt="author"
          className="w-auto h-28 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mx-auto"
        />
        <h2 className="mx-auto my-0 p-3">Masa</h2>
        <p className="mx-auto px-5">Hi, I&apos;m Masa!</p>
        <div className="mx-auto px-3 pb-5">
          <Link href="https://github.com/monda00">
            <CustomIcon icon={FaGithub} color="gray" size={30} />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProfileCard
