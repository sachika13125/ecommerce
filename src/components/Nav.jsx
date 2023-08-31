import { Disclosure } from '@headlessui/react'

const navigation = [
    { name: 'Home', href: '#', current: true },
    { name: 'Shop', href: '#', current: false },
    { name: 'About Us', href: '#', current: false },
    { name: 'Contact', href: '#', current: false },
  ];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Nav() {
  return (
    <Disclosure as="nav" className="bg-gray-800">
          <div className="w-full mx-auto px-2 sm:px-6 lg:px-8 bg-black">
            <div className="relative flex h-16 items-center justify-between">
              <div className="flex flex-1 items-center justify-between sm:items-stretch">
                <div className="sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
                <div className="flex flex-shrink-0 justify-center items-center">
                  <span className='w-auto  text-white font-bold tracking-widest text-lg'>CREST FACTOR</span>
                </div>
                <div className='text-white flex items-center justify-between'>
                  <ul className='flex gap-9'>
                    <li>Instagram</li>
                    <li>Twitter</li>
                    <li>Pinterest</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
    </Disclosure>
  );
}
