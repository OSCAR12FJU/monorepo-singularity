import { CatIcon } from "../../Icons/CatIcon";
import { HouseIcon } from "../../Icons/HouseIcon";
import { PawICon } from "../../Icons/PawICon";
import { ServiceItem } from "../ServiceItem";
import DogIcon from "../../../public/files/DogIcon.png"

export function OurServices(){
    return(
        <section className="flex justify-center items-center px-4 py-8">
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl px-2">
             <div className="flex flex-col justify-start">

              <div className="flex flex-col justify-center items-start px-2 md:p-8"> 
                <h2 className="text-3xl text-[#FD5D40] font-extrabold mb-4 md:mb-8">Our Services</h2>
                <p className="text-lg font-normal text-gray-500 mb-6">National Brand With a Local Feel Experience the Fetch! Difference</p>
                <span className="text-[#FD5D40] font-bold mb-4">Enter Your Location and Fetch Our Services</span>

                <button type="button" className=" inline-flex items-center text-gray-400 bg-[#FFFF] text-lg  py-1.5 rounded-full pl-6 pr-0  gap-6 font-normal shadow">
                Zip Code
                <span className="rounded-full bg-[#FF6752] flex justify-center items-center w-12 h-12 ml-2 md:ml-6 mr-1">
                <svg className="rtl:rotate-180 w-6 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
                </span>
                </button>

              </div>
             </div>
              <div className="grid grid-cols-2 gap-6 mx-auto mb-8">
                <ServiceItem text="Dog Walking">
                    <div className="max-w-lg mx-auto mb-4 text-gray-500 lg:mb-8">
                        <img src={DogIcon} alt="DogIcon"/>
                    </div>
                </ServiceItem>
                <ServiceItem text="Pet Sitting">
                    <CatIcon className="mb-6" />
                </ServiceItem>
                <ServiceItem text="Overnight Care">
                    <HouseIcon className="mb-6"/>
                </ServiceItem>
                <ServiceItem text="Other Services">
                    <PawICon className="mb-6" color="#B3BDCE" opacity="0.9"/>
                </ServiceItem>
              </div>

            </div>
        </section>
        
    )

}