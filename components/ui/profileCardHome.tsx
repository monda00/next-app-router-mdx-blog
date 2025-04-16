import Image from 'next/image'
import Link from 'next/link'
import { FaGithub } from 'react-icons/fa'
import { SiQiita, SiZenn, SiKaggle } from 'react-icons/si'
import BuyMeACoffee from './buyMeACoffee'
import { CustomIcon } from '@/components/ui/customIcon'

function ProfileCardHome() {
  return (
    <div className="flex justify-center py-10 md:py-20">
      <div className="bg-neutral w-80 md:w-148 lg:w-192 xl:w-256 rounded-box p-8">
        <h2 className="flex justify-center md:justify-start text-neutral-content text-xl md:text-2xl font-bold my-0">
          Profile
        </h2>
        <div className="flex flex-col md:flex-row items-center">
          <Image
            src="/author.webp"
            width={100}
            height={100}
            alt="author"
            className="w-auto h-28 rounded-full ring-3 ring-primary ring-offset-base-100 ring-offset-2 mr-0 my-2 md:mr-5"
          />
          <div>
            <h3 className="flex justify-center md:justify-start text-neutral-content text-xl md:text-2xl font-bold my-0 p-2">
              Masa
            </h3>
            <p className="text-neutral-content text-base md:text-lg px-2 mb-2">
              I&apos;m a engineer working in Japan.
            </p>
            <div className="flex flex-col md:flex-row">
              <div className="flex items-center px-2">
                <Link href="https://github.com">
                  <CustomIcon
                    icon={FaGithub}
                    size={30}
                    className="text-neutral-content m-3"
                  />
                </Link>
                <Link href="https://qiita.com">
                  <CustomIcon
                    icon={SiQiita}
                    size={30}
                    className="text-neutral-content m-3"
                  />
                </Link>
                <Link href="https://zenn.dev">
                  <CustomIcon
                    icon={SiZenn}
                    size={30}
                    className="text-neutral-content m-3"
                  />
                </Link>
                <Link href="https://www.kaggle.com">
                  <CustomIcon
                    icon={SiKaggle}
                    size={30}
                    className="text-neutral-content m-3"
                  />
                </Link>
              </div>
              <div>
                <BuyMeACoffee width={200} height={40} className="md:ml-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileCardHome
