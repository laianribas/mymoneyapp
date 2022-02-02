import Messages from '../common/msg/messages'
import Footer from '../common/template/Footer'
import Header from '../common/template/Header'
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
      <Messages />
    </>
  )
}

export default App
