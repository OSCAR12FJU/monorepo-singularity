import LogoPet from "../../../public/files/LogoPet.png"
export function Header(){
return(
<header className="bg-[#F8583E] w-full">
 <div className="flex items-center justify-between mx-auto p-4 max-w-7xl">
  <a className="flex justify-center items-center bg-white overflow-hidden p-2 rounded-full w-12 h-12 ">
    <img 
    src={LogoPet}
    className="object-cover" />
  </a>

  <nav className="hidden w-full md:block">
   <ul className="flex justify-end gap-x-4 items-center font-sm text-xl text-white">
   <li>
    <a className="block py-2 px-3 text-white rounded md:p-0">Location</a>
   </li>
   <li>
    <a className="block py-2 px-3 text-white rounded md:p-0">Blog</a>
   </li>
   <li>
    <a className="block py-2 px-3 text-white rounded md:p-0">Services</a>
   </li>
   <li>
    <a className="block py-2 px-3 text-white rounded md:p-0">About Us</a>
   </li>
   <li>
    <a className="block py-2 px-3 text-white rounded md:p-0">Franchise with US</a>
   </li>
   </ul>
  </nav>
 </div>

</header>
)
}