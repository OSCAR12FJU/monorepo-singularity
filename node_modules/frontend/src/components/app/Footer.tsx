export function Footer() {
    return(
        <>
<footer className="bg-[#FF6752] px-4" >
    <div className="mx-auto w-full max-w-screen-xl">
      <div className="grid grid-cols-2 gap-y-4 gap-x-2 md:gap-8 px-2  md:px-4 py-6 lg:py-8 md:grid-cols-4 ">
        <div>
            <h4 className="mb-6 text-base font-bold text-[#FFE530] ">About</h4>
            <ul className="text-white font-normal">
                <li className="mb-4">
                    <a href="#" className=" hover:underline">Locations</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Franchise With Us</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Partners</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">About US</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Make Fetch Happen!</a>
                </li>
            </ul>
        </div>
        <div>
            <h4 className="mb-6 text-base font-bold text-[#FFE530]  ">Resources</h4>
            <ul className="text-white  font-normal">
                <li className="mb-4">
                    <a href="#" className="hover:underline">Reviews</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Pet Resources Center</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Media Fact Sheet</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Blog</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">News</a>
                </li>
            </ul>
        </div>
        <div>
            <h4 className="mb-6 text-base font-bold text-[#FFE530]  ">Legal</h4>
            <ul className="text-white font-normal">
                <li className="mb-4">
                    <a href="#" className="hover:underline">Gift Cards</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Services</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Franchise Login</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Terms of Use</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Privacy Policy</a>
                </li>
            </ul>
        </div>
        <div className="flex flex-col items-start">
            <h4 className="mb-6 text-base font-bold text-[#FFE530]  ">NewsLetter</h4>
            <span className="text-white font-normal">
             Sign up to receive the Fetch!<br/>
            Family Newsletter</span>

            <button type="button" className="mt-4 text-gray-400 bg-[#F3F6FB] font-medium text-lg  py-1.5 text-center inline-flex items-center rounded-full pl-2 md:pl-6 pr-0 justify-center md:gap-x-6 shadow leading-6">
            Email adress
            <span className="rounded-full bg-[#FF6752] flex justify-center items-center w-12 h-12 ml-2 md:ml-6 mr-1">
            <svg className="rtl:rotate-180 w-6 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
            </span>
            </button>
        </div>
    </div>
    </div>
</footer>

        </>
    )
}