import { CatIcon } from "../../Icons/CatIcon"
import { ServiceItem } from "../ServiceItem"

export const HowWorks = () =>{
 return(
    <section className="flex justify-center items-center px-4 py-10">
      <div className="grid md:grid-cols-2 gap-8 md:py-8 px-2 max-w-6xl">
       <div className="flex flex-col mx-auto">

        <div className="grid grid-cols-2 gap-y-4 md:gap-y-8 gap-x-18">

         <ServiceItem className="px-18" text="Reserver">
          <CatIcon className="mb-6"/>
         </ServiceItem>
         <div className="flex text-center justify-center items-center px-16 py-8"></div>
        </div>

        <div className="grid grid-cols-2 gap-y-8 gap-x-18">
         <div className="flex text-center justify-center items-center px-16 py-8"></div>
         <ServiceItem className="px-18" text="Reserver">
          <CatIcon className="mb-6"/>
         </ServiceItem>

        </div>

        <div className="grid grid-cols-2 gap-y-8 gap-x-18">
         <ServiceItem className="px-18" text="Reserver">
          <CatIcon className="mb-6"/>
         </ServiceItem>
         <div className="flex text-center justify-center items-center px-16 py-8"></div>
        {/* </div> */}

        </div>
       </div>

       <div className="flex flex-col justify-start">
        <div className="flex flex-col justify-center items-start py-8 md:pl-8 md:pr-18 md:mb-8">
          <h2 className="font-extrabold text-[#FD5D40] text-3xl mb-8"> How it Works</h2>
          <p className="font-normal text-lg text-gray-500 mb-6">Because finding a good pet sitter shouldn't be a hassle. With Fetch It's as easy as..</p>
          <span className="font-bold text-[#FD5D40] mb-4"></span>

          <button type="button" className="text-gray-400 bg-[#FFFF] focus:ring-4 text-lg py-1.5 text-center inline-flex items-center rounded-full pl-6 pr-0 justify-center gap-6 font-normal shadow">
          Zip Code
          <span className="rounded-full bg-[#FF6752] flex justify-center items-center w-12 h-12 ml-auto md:ml-6 mr-1">
            <svg className="rtl:rotate-180 w-6 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
          </span>
          </button>
        </div>
       </div>
      
        
      </div>

    </section>

 )

}