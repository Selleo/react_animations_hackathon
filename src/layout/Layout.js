import { Outlet } from 'react-router-dom'

import { Nav } from './Nav'

export const Layout = () => {
  return (
    <div className="text-md text-black">
      <Nav />
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <Outlet />
        </div>
      </main>
    </div>
  )
}
