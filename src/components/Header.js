//import tatalogo from '../tatadigital1';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../components/tatadigital1.png';
import { useRouter } from 'next/router';


  function Header(){
    const router = useRouter();

      return(
        <header>
        <nav className="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-800 border-b border-gray-200">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
            <div className="items-center flex">
            <button data-collapse-toggle="mobile-menu-3" type="button" className="inline-flex items-center p-2 ml-3 mr-3 text-sm text-gray-500 rounded-lg focus:outline-none dark:text-gray-400" aria-controls="mobile-menu-3" aria-expanded="false">
           <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
           <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
           </button>
           <Link href="/">    
            <a className="flex mr-3 w-[8rem] pt-1">
               <span className="self-center text-lg font-semibold whitespace-nowrap dark:text-white">
               <Image src={logo} alt="Tata Digital"/>
               </span>
           </a>
           </Link>
           <div>
           <ul className="flex">
               <li className={router.pathname == "/about" ? "text-blue-700" : ""}>
                   <Link href="/about">
                   <a className="inline-flex items-center py-2 pr-4 pl-3 hover:text-blue-700 focus:text-blue-700" aria-current="page">
                   About             
               <svg class="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
             <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
           </svg>
           </a>
                   </Link>
    
               </li>
               <li className={router.pathname == "/businesses" ? "text-blue-700" : ""}>
               <Link href="/businesses">
               <a className="inline-flex items-center py-2 pr-4 pl-3 hover:text-blue-700 focus:text-blue-700">
                   Businesses
                   <svg class="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
             <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
           </svg>
               </a>
               </Link>
               </li>
               <li className={router.pathname == "/careers" ? "text-blue-700" : ""}>
               <Link href="/careers">
               <a href="/careers" className="inline-flex items-center py-2 pr-4 pl-3 hover:text-blue-700 focus:text-blue-700">
                   Careers
                   <svg class="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
             <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
           </svg> 
               </a>
               </Link>
               </li>
           </ul>  
           </div>
            </div>
            <div className="hidden relative mr-3 md:mr-0 md:block">
            <button>
<svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
</button>

           </div>
       </div>
        </nav>
    </header>
      )
  }
  
  export default Header;