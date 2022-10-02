import Displayphoto from "../components/Displayphoto";
import Link from 'next/link'


const  Rightside= () => {
    

    return (


        <div className="font-bold justify-start">
            <ul>
               
               <Link href='/img9.jpeg' ><li   className="dark:md:hover:text-fuchsia-600 display:block">Moong dal</li></Link>
               <Link href='/img11.jpeg'><li   className="dark:md:hover:text-fuchsia-600 display:block">Mixed Namkeen</li></Link>
               <Link href='/img12.jpeg'><li  className="dark:md:hover:text-fuchsia-600 display:block">Bhujiya</li></Link>
               <Link href='/img13.jpeg'><li   className="dark:md:hover:text-fuchsia-600 display:block">Aaloo Bhujiya</li></Link>
               <Link href='/img14.jpeg'><li   className="dark:md:hover:text-fuchsia-600 display:block">Moth dal</li></Link>
               <Link href='/img15.jpeg'><li  className="dark:md:hover:text-fuchsia-600 display:block">Aaloo Chips </li></Link>

            </ul>
        </div>
      );
}
 
export default Rightside;