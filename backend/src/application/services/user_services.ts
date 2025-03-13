import jwt from "jsonwebtoken";
import { userRepoInstance } from "../../domain/repositories/user_repository"
import { comparePassword } from "../../utils/passwordUtils";
import { InterUser } from "../../domain/models/user_model";

export const UserServices = {
    userLogin : async (email: string, password: string) =>{
        const storeUser = await userRepoInstance.getAllUsers();
        const user = storeUser.find((user) => user.email === email);
        if(!user){
            throw new Error('user not found');
        }
        // const isPasswordValid = await comparePassword( password, user.password);
        const isPasswordValid = user.password === password;
        if (!isPasswordValid) {
        throw new Error('invalid password');
        }
        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET as string, { expiresIn: '1h' });

        return {user, token}
    },

    createUser: async(UserData: InterUser) =>{
        await userRepoInstance.saveUser(UserData)
    },
    allUsers:async () =>{
        const users = await userRepoInstance.getAllUsers();
        if(users.length < 0){
            throw new Error("is no data in the database");
        }
        return users;
    }

}