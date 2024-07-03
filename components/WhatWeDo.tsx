import { team, team2, team3 } from '@/public'
import { PresentationChartBarIcon, GlobeEuropeAfricaIcon, UsersIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'

const features = [
  {
    name: 'Who We Are.',
    description:
      'Prosperity Financial Consulting is a leading financial advisory firm dedicated to helping individuals and businesses achieve their financial goals. With a team of experienced professionals, we offer personalized financial solutions and unparalleled expertise.',
    icon: UsersIcon,
  },
  {
    name: 'Our Mission.',
    description: 'To empower our clients with the knowledge and tools they need to make sound financial decisions and secure a prosperous future.',
    icon: GlobeEuropeAfricaIcon,
  },
  {
    name: 'Our Vision.',
    description: 'To be the most trusted and respected financial consulting firm, known for our integrity, innovation, and client-centric approach.',
    icon: PresentationChartBarIcon,
  },
]

export default function Example() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <Image
                src={team3}
                alt="Product screenshot"
                className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] -ml-72 "
                width={2432}
                height={1442}
            />
          <div className="lg:pl-8 lg:pt-4 place-self-center">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-green-600">Your Partner in Financial Success</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Partner with us to navigate the complexities of finance with confidence and clarity.</p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-green-600" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}
