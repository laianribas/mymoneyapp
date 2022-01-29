import Footer from '../common/template/Footer'
import Header from '../common/template/Header'
import Home from '../common/template/Home'
import SideNav from '../common/template/SideNav'
import AppRoutes from './AppRoutes'

function App() {
  return (
    <>
      <Header />
      <SideNav />
      <div className="content-wrapper">
        <AppRoutes />
      </div>
      <Footer />
    </>
  )
}

export default App
