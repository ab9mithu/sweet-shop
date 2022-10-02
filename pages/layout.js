import Navbar from "./Navbar"
import Footer from "./footer"
import "tailwindcss/tailwind.css"
const Layout= ({children}) => {
    return ( 
<div>
<Navbar/>
{children}
<Footer/>
</div>
 );
}
 
export default Layout ;