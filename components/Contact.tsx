import Image from "next/image"

const links = [
    { name: 'Open roles', href: '#' },
    { name: 'Internship program', href: '#' },
    { name: 'Our values', href: '#' },
    { name: 'Careers', href: '#' },
  ]
  const stats = [
    { name: 'Facebook'},
    { name: 'Instagram'},
    { name: 'LinkedIn'},
    { name: 'Xing'},
  ]
  
  export default function Contact() {
    return (
      <div className="relative isolate overflow-hidden bg-green-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Contact us</h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
            Ready to take control of your financial future? Get in touch with us today to schedule your initial consultation. Our team of experts is here to help you achieve your financial goals and secure a prosperous future.
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
              {links.map((link) => (
                <a key={link.name} href={link.href}>
                  {link.name} <span aria-hidden="true">&rarr;</span>
                </a>
              ))}
            </div>
            <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.name} className="flex flex-col-reverse">
                  <dt className="text-base leading-7 text-gray-300">{stat.name}</dt>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    )
  }
  