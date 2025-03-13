import { useState } from "react";
import LogoPet from "../../../public/files/LogoPet.png"
import { FormLogin } from "../FormLogin";
import { useLoading } from "../../store/useLoading";
import { CircleLoading } from "../CircleLoading";
import { ModalRegister } from "../ModalRegister";


export const LoginSesion = () =>{

// const {loading} = useAuth()

const [isModalOpen, setIsmodalOpen] = useState(false);
const handleModal = () =>{
    setIsmodalOpen((prev) => !prev)
}

// const loading = useLoading((state) => state.loading);
const {loading} = useLoading();

return(

<section className="flex flex-col justify-center items-center min-h-screen bg-custom-svg bg-cover bg-white"> 

{
 loading && <CircleLoading />
}
{/* {
loading && <Loading />} */}

{/* <div className='md:py-8 px-6 md:px-4 w-full max-w-screen-xl lg:py-16'> */}

<div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-7xl mx-auto">

<div className="flex justify-center items-center">

<div className='w-42 h-42 md:w-64 md:h-64 flex justify-center rounded-full items-center bg-white overflow-hidden p-6 md:p-12'>
 <img src={LogoPet} alt='LogoPet' className='object-cover'/>
</div>

</div>

<div className='flex flex-col justify-center items-center'>
<FormLogin closeModal = {handleModal}/>

</div>

</div>

{ isModalOpen && (
    <div className="fixed inset-0 bg-gray-300/50 transition-opacity duration-300 z-40">
        <ModalRegister closeModal ={handleModal} />
    </div>
)}
</section>
    )

}