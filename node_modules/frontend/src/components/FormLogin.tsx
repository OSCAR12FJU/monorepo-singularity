import React, { FC, useState } from 'react';
import { User, UserApi } from '../api/UserApi';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/useAuthStore';
import { useLoading } from '../store/useLoading';
import { CircleLoading } from './CircleLoading';
// import { useNavigate } from 'react-router-dom';

interface FormLoginProps {
  closeModal: () => void;
}
export const FormLogin: FC<FormLoginProps> = ({closeModal}) =>{
    // interface UserItem{
    //     email: string;
    //     password: string;
    // }

    // const handleCloseModal = () => {

    //   setIsModalOpen((prev) => !prev)
    // };

    // const {setLoading, emailError ,setEmailError, setToken} = useAuth()    
    // const [hasAttempted, setHasAttempted] = useState(false);
    const [userData, setuserData] = useState({
      email: '',
      password: '',  
    });
    const [userLogin, setUserLogin] = useState<User[]>([]);

    const {loading,setLoading} = useLoading();
    
    const setToken = useAuthStore((state) => state.setToken);
    const navigate = useNavigate()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        const {name,value} = e.target;
        setuserData(prevState => ({
        ...prevState, 
        [name]: value,
        }));
    };

     const identificationUser = async() =>{
      const userLogin = await UserApi.loginUser(userData.email, userData.password);
      if(userLogin?.token){
        setToken(userLogin.token);
      }
      // console.log("respuesta de la petición", userLogin)
      if (typeof userLogin === "string"){
        // setHasAttempted(true);
        // setEmailError(makeLogin);
        return;
      }
      if(userLogin?.error){
        // setHasAttempted(true);
        // setEmailError(makeLogin.error);
        return;
      }
    //   setEmailError(" "); "Mensaje para el alert"
    //   setToken(makeLogin.token); "guardamos el token de validación de usuario"
      navigate("/inicio");
    }

    const handleSubmit = async(e: React.FormEvent) =>{
        e.preventDefault();

        const user: User = {
            email: userData.email,
            password: userData.password
        }
        setLoading(true);
        // setLoading(true);
       try{
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setUserLogin( [...userLogin, user])
 
         setuserData({
             email: '',
             password: '',
         })


        //  setHasAttempted(false);
        identificationUser();
       }catch(error){
        console.error("Error during submission:", error);
       } 
       finally{
         setLoading(false);
       }

    };

    // const handleFocus = () => {
    //     setHasAttempted(false); 
    //   };

    return(
    <div className='w-3/4 px-4 py-5 mb-3 bg-white rounded-2xl shadow-lg md:shadow-none'>
    <h2 className='text-xl font-bold text-[#1f2937] pl-4  border-l-8 border-[#FC6048]'>BIENVENIDO</h2>
    <form 
    onSubmit={handleSubmit}
    className ="mt-8 gap-7 flex flex-col jsutify-center no-outline ">
        <div className="flex flex-col gap-y-4">
         <input
          type="email"
          name="email"
          id="email"
          value={userData.email}
          onChange={handleChange}
            //   onFocus={handleFocus}
          className={`p-2.5 w-full text-md font-normal shadow-input text-gray-600 focus:outline-none`}
          style={{boxShadow:"rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px"}}
           placeholder="EMAIL"
           required/>

            {/* {hasAttempted && emailError.length > 0 && (
            <p className="mt-2 text-sm text-red-600">
              <span className="font-medium">Oops!</span> {emailError}
            </p>
          )} */}

            <input
              type="password"
              name="password"
              id="password"
              value={userData.password}
            //   onFocus={handleFocus}
              onChange={handleChange}
              className={`p-2.5 w-full text-md font-normal shadow-input border-none text-gray-600 focus:outline-none`}
              style={{boxShadow:"rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px"}}
              placeholder="CONTRASEÑA"
              required
            />
          </div>

          {/* {hasAttempted && passwordError && (
            <p className="mt-2 text-sm text-red-600 dark:text-red-500">
              <span className="font-medium">Oops!</span> {passwordError}
            </p>
          )} */}
          <div className="flex justify-end">
             <a href="#" className="text-sm font-sm text-decoration-none text-gray-400">¿Olvidaste tu contraseña? </a>
          </div>
          <button
            type="submit"
            className='py-4 px-8 text-md font-medium rounded-full text-center border-none shadow-button-form cursor-pointer'
            style={{
              color: "#ffffff",
              background:"#4487FF",
              maxWidth: "200px",
              margin: "auto"
            }}
          >
            INICIAR SESIÓN
          </button>
          <div 
            className="text-sm font-medium text-center text-gray-400">
             AÚN NO TENES CUENTA <a className="text-blue-600 cursor-pointer" onClick={closeModal}>REGISTRARSE</a>
          </div>
        </form>

    {loading && (
        <CircleLoading />
    )}

    </div>
    )
}