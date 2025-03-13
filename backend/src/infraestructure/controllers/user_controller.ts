import { Request, Response } from "express";
import { InterUser, User } from "../../domain/models/user_model";
import { UserServices } from "../../application/services/user_services";

export const UserController = {
    register: async (req: Request, res: Response) =>{
        const {name,email, lastName, nacionality, password} = req.body;
        
        const newUSer = new User({name,email, lastName, nacionality, password})
        if(!newUSer.isValid()){
            throw new Error("Invalid user data");
        }

        try{
            const newUser = await UserServices.createUser(newUSer)
            res.status(201).json({
                message: "User register exited!",
                user: newUser,
            });
        }catch(error: any){
            res.status(400).json({error: error.message});
        }
    },
    login: async (req: Request, res: Response) =>{
        const {email, password} = req.body;
        if(!email && !password){
            throw new Error("Invalid user data");
        }
        try{
            const userLogin = await UserServices.userLogin(email, password);
            res.status(201).json({
                message: "User login exited!",
                user: userLogin,
            });
        }catch(error:any){
            res.status(400).json({error: error.message});
        }
    },
    allUsers: async(req: Request, res: Response) =>{
        try{
            const users = await UserServices.allUsers();
            res.status(201).json({
                message: "Data completed store!",
                users: users,
            });
        } catch(error:any){
            res.status(400).json({error: error.message});
        }
    }

    
}