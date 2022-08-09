import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import classNames from 'classnames'
import { Link, NavLink } from 'react-router-dom'

import { Logo } from './Logo'

const navigation = [
  { name: 'framer-motion', to: '/framer-motion', current: false },
  { name: 'react-motion', to: '/react-motion', current: false },
  { name: 'react-spring', to: '/react-spring', current: false },
  { name: 'reanimated', to: '/reanimated', current: false },
]

export const Nav = () => (
  <Disclosure as="nav" className="bg-neutral-600 drop-shadow">
    {({ open }) => (
      <>
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button*/}
              <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-base text-neutral-300 hover:text-white hover:bg-neutral-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span className="sr-only">Open main menu</span>
                {open ? (
                  <XIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                )}
              </Disclosure.Button>
            </div>
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex-shrink-0 flex items-center">
                <span className="block w-auto text-white fo nt-medium">
                  <Link to="/">
                    <Logo />
                  </Link>
                </span>
              </div>
              <div className="hidden sm:block sm:ml-6">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <NavLink
                      key={item.to}
                      to={item.to}
                      className={({ isActive }) =>
                        classNames(
                          isActive
                            ? 'bg-neutral-600 text-primary-500'
                            : 'text-neutral-300 hover:bg-neutral-500 hover:text-white',
                          'p-2 rounded-base text-sm font-bold'
                        )
                      }
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <Disclosure.Panel className="sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                as={Disclosure.Button}
                className={({ isActive }) =>
                  classNames(
                    isActive
                      ? 'bg-neutral-600 text-white'
                      : 'text-neutral-300 hover:bg-neutral-500 hover:text-white',
                    'block p-2 rounded-base text-base font-bold'
                  )
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </Disclosure.Panel>
      </>
    )}
  </Disclosure>
)
