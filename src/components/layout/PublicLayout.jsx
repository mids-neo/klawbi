import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

export default function PublicLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Main content area — pt-16 accounts for fixed navbar height */}
      <main className="flex-1 pt-16">
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}
