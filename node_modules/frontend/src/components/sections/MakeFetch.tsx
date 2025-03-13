import Chihuahua from "../../../public/files/Chihuahua.png"

export function MakeFetch(){
    return(
   <section className="flex justify-center items-center max-w-6xl mx-auto py-14">

    <div className="grid items-center gap-8 grid-cols-1 lg:grid-cols-3 lg:gap-2 bg-[#3F7FFA] py-8 md:py-6 rounded-[2rem] mx-4 px-4">
        
      <div className="flex justify-center items-center col-span-1">
      <img src={Chihuahua} alt="placeholder hero"
        className="max-h-64 max-w-[22rem] md:max-h-96 w-full rounded-md object-cover" />
      </div>

      <div className="flex flex-col items-start lg:text-left col-span-2 pr-4">
        <h2 className="text-3xl font-bold text-[#FFE530]  mb-6">Make Fetch! Happen</h2>
        <p className="mb-8 text-xl text-white leading-normal">
          If you love pets and want exciting work, apply to be a Fetch!
          Pet Care Provider! We train every team member and provide ongoing support to help you ger the most from your
        </p>
        <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
          <button
            className="inline-flex items-center justify-center text-xl font-bold bg-white h-11 rounded-full py-8 px-8 w-full text-[#FE6B49] sm:w-auto">
                Join Now</button>
        </div>
      </div>


        </div>
    </section>
)
}