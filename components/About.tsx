import { team, team2 } from '@/public'
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'

const features = [
  {
    name: 'Who We Are.',
    description:
      'Prosperity Financial Consulting is a leading financial advisory firm dedicated to helping individuals and businesses achieve their financial goals. With a team of experienced professionals, we offer personalized financial solutions and unparalleled expertise.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Our Mission.',
    description: 'To empower our clients with the knowledge and tools they need to make sound financial decisions and secure a prosperous future.',
    icon: LockClosedIcon,
  },
  {
    name: 'Our Vision.',
    description: 'To be the most trusted and respected financial consulting firm, known for our integrity, innovation, and client-centric approach.',
    icon: ServerIcon,
  },
]

export default function Example() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4 place-self-center">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-green-600">Your Partner in Financial Success</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">About us</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
              With decades of experience and a client-centric approach, we empower you to make informed decisions and achieve financial stability. Partner with us to navigate the complexities of finance with confidence and clarity.
              </p>
              {/* <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-green-600" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl> */}
            </div>
          </div>
          <Image
            src={team2}
            alt="Product screenshot"
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>
  )
}
