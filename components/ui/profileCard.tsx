import Image from 'next/image'
import Link from 'next/link'
import { FaGithub } from 'react-icons/fa'
import { SiQiita, SiZenn, SiKaggle } from 'react-icons/si'
import BuyMeACoffee from './buyMeACoffee'
import { CustomIcon } from '@/components/ui/customIcon'

interface ProfileCardProps {
  widthClass?: string
}

function ProfileCard({ widthClass = 'w-60' }: ProfileCardProps) {
  return (
    <div className="flex flex-col justify-center mb-4">
      <div className={`bg-base-200 ${widthClass} rounded-box p-6`}>
        <h2 className="flex justify-center text-xl lg:text-2xl font-medium text-base-content my-0">
          Profile
        </h2>
        <div className="flex flex-col justify-center">
          <Image
            src="/author.webp"
            width={100}
            height={100}
            alt="author"
            className="w-auto h-20 lg:h-28 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mx-auto my-2"
          />
          <div>
            <h2 className="flex justify-center text-xl lg:text-2xl font-medium text-base-content my-0 p-2">
              Masa
            </h2>
            <p className="text-base-content text-xs lg:text-sm mb-2">
              I&apos;m a engineer working in Japan.
            </p>
            <div className="flex justify-center">
              <Link href="https://github.com">
                <CustomIcon
                  icon={FaGithub}
                  size={24}
                  className="text-base-content m-2"
                />
              </Link>
              <Link href="https://qiita.com">
                <CustomIcon
                  icon={SiQiita}
                  size={24}
                  className="text-base-content m-2"
                />
              </Link>
              <Link href="https://zenn.dev">
                <CustomIcon
                  icon={SiZenn}
                  size={24}
                  className="text-base-content m-2"
                />
              </Link>
              <Link href="https://www.kaggle.com">
                <CustomIcon
                  icon={SiKaggle}
                  size={24}
                  className="text-base-content m-2"
                />
              </Link>
            </div>
            <div>
              <BuyMeACoffee width={200} height={40} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileCard
