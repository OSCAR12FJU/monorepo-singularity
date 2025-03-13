
export interface User{
    email: string;
    password:string;
    name?:string;
    lastname?:string;
    nacionality?:string;
}

interface UserReponse{
    message:string;
    user: User;
}

export const UserApi= {
    registerUser: async (user: User): Promise<UserReponse> => {
        try{
            const response = await fetch("http://backend:4000/api/user/register",{
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user)
            });
            if(!response.ok){
                throw new Error(`Error in request:${response.status}`);
            }
            const data = await response.json();
            return data;
        }catch(error){
            throw new Error(`Error inserting user:${error}`);

        }
    },
    loginUser: async (email:string, password:string) =>{
        try{
            const response = await fetch("http://backend:4000/api/user/login",{
                method: "POST",
                headers:{
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email,
                    password
                })
            });

            const data = await response.json();
            if(response.ok){
                return {
                user: data.user.user,
                token: data.user.token, 
                error: null};
            }else{
                if(data.error === "invalid user data"){
                    return {token: null, error:"invalid user data"}
                }
            }
            // if(response.ok){
            //     retur
            // }

        }catch(error){
            throw new Error(`Error login user:${error}`);
        }

    }

}