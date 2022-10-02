import Link from 'next/link'

const  Leftside= () => {
    return (  
<div className="font-bold justify-end w-screen ">
    <ul >
    <Link href='/img1.jpeg'><li className="dark:md:hover:text-fuchsia-600" >Kaju katli</li></Link>
    <Link href='/img2.jpeg'><li className="dark:md:hover:text-fuchsia-600">Gulab Jamnu</li></Link>
    <Link href='/img3.jpeg'><li className="dark:md:hover:text-fuchsia-600">Badam Halwa</li></Link>
    <Link href='/img5.jpeg'><li className="dark:md:hover:text-fuchsia-600">Motichur Laddu</li></Link>
    <Link href='/img6.jpeg'><li className="dark:md:hover:text-fuchsia-600">Rasgulla</li></Link>
    <Link href='/img7.jpeg'><li className="dark:md:hover:text-fuchsia-600">Jalebi</li></Link>
    <Link href='/img8.jpeg'><li className="dark:md:hover:text-fuchsia-600">Mysore Pak</li></Link>
    </ul>
</div>

    );
}
 
export default Leftside ;