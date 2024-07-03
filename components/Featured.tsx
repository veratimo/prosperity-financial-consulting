import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Personalized Financial Planning',
    description: 'We create tailored financial plans based on your unique goals and circumstances to guide you towards financial stability and success.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Investment Management',
    description: 'Our experts manage a diversified portfolio, optimizing returns and managing risks to ensure your investments grow effectively.',
    icon: LockClosedIcon,
  },
  {
    name: 'Retirement Solutions',
    description: 'We develop comprehensive retirement strategies to help you achieve a secure and fulfilling retirement with sustainable income plans.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Tax Optimization',
    description: 'Our tax strategies minimize your tax liability while ensuring compliance, allowing you to keep more of your earnings.',
    icon: FingerPrintIcon,
  },
]

export default function Example() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-green-900">Start Your Journey Today</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Take the first step towards financial freedom.
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
          With decades of experience and a client-centric approach, we empower you to make informed decisions and achieve financial stability. Partner with us to navigate the complexities of finance with confidence and clarity.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-green-700">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
