import Head from 'next/head'



import Leftside from './leftsideoptions'
import Rightside from './rightsideoptions'

export default function Home() {
  return (
    
    <div className='flex py-20'>
      
      <Head>
        <title  >mithi mirchi house</title>
       <link rel="icon" href="/mithimirchi.jpg" />
      </Head>
    
<Leftside />

 
<Rightside/>
</div>
   
    
  )
}
