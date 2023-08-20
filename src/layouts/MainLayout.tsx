import { Footer, Header, Navbar, SearchBar } from '@/components'
import { Outlet } from 'react-router-dom'

const MainLayout = ({ hideNav = false }: { hideNav?: boolean }) => {
  return (
    <main>
      <Header />
      <SearchBar />
      {!hideNav && <Navbar />}
      <Outlet />
      <Footer />
    </main>
  )
}

export default MainLayout
