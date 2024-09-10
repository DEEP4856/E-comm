/* eslint-disable react/prop-types */
import MyNavbar from "../navbar/Navbar"
import Footer from "../footer/Footer"


const Layout = ({children}) => {
  return (
    <div>
       <MyNavbar />
       <div className="content">
          {children}
       </div>
       <Footer/> 
    </div>
  )
}

export default Layout
