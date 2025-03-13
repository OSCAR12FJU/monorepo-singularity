import GoldenPet from "../../../public/files/GoldenPet.png";

export function PrintipalPet(){
    return(
        <section className="flex justify-center items-center py-8 px-4">
          <div className=" grid md:grid-cols-2 gap-x-8 max-w-7xl ">
            <div className="flex flex-col justify-center items-start px-2 md:px-4 md:pr-12 pb-12">

             <h1 className="text-white text-3xl font-extrabold">We Get Pet Care!</h1>
             <p className="font-normal text-lg mb-4">For over 17 years, Fetch! Pet Care has been a trusted parther in keeping pets healthy and happy!</p>

             <div className="inline-flex items-center gap-4">

              <a className="font-semibold bg-[#4487FF] text-center py-4 px-8 text-base rounded-full" href="#">
                Shedule Service
              </a>

              <span className="text-base font-normal">Or Call 866.338.2463</span>

             </div>
            </div>
            <div className="flex justify-center items-center mx-auto w-full">
              <div className="flex justify-end items-center">
                <img 
                src={GoldenPet}
                className="object-cover"/>
              </div>

            </div>

          </div>

        </section>
  
    )
}