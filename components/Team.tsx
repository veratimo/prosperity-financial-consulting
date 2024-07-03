import { person, person1, person2, person3, person4, person5, person6, person7, person8, person9 } from "@/public"
import Image from "next/image"

const products = [
    {
      id: 1,
      name: 'CEO',
      href: '#',
      price: 'Dave Thomson',
      imageSrc: person,
      imageAlt: 'Team member',
    },
    {
      id: 2,
      name: 'CTO',
      href: '#',
      price: 'Carlo Di Mario',
      imageSrc: person1,
      imageAlt: 'Team member',
    },
    {
      id: 3,
      name: 'CO',
      href: '#',
      price: 'Andrew Paul',
      imageSrc: person2,
      imageAlt: 'Team member',
    },
    {
      id: 4,
      name: 'Regional Manager',
      href: '#',
      price: 'Tom Lagerfield',
      imageSrc: person3,
      imageAlt: 'Team member',
    },
    {
        id: 5,
        name: 'Agent',
        href: '#',
        price: 'Lara Carton',
        imageSrc: person4,
        imageAlt: 'Team member',
      },
      {
        id: 6,
        name: 'Agent',
        href: '#',
        price: 'Georgia Ford',
        imageSrc: person5,
        imageAlt: 'Team member',
      },
      {
        id: 7,
        name: 'Agent',
        href: '#',
        price: 'Dave Thomson',
        imageSrc: person6,
        imageAlt: 'Team member',
      },
      {
        id: 8,
        name: 'Agent',
        href: '#',
        price: 'Sara Lewison',
        imageSrc: person7,
        imageAlt: 'Team member',
      },
      {
        id: 9,
        name: 'Agent',
        href: '#',
        price: 'Matt Scavo',
        imageSrc: person8,
        imageAlt: 'Team member',
      },
      {
        id: 10,
        name: 'Agent',
        href: '#',
        price: 'Stephania Smith',
        imageSrc: person9,
        imageAlt: 'Team member',
      },
    
  ]
  
  export default function Team() {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-center my-8 mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our team</h2>
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <a key={product.id} href={product.href} className="group">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <Image
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    )
  }
  