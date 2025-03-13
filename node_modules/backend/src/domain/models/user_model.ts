import fs from "fs";
// import store from "../../../"
import pathStore from "../store/storeUserData.json"
// import pathStore from "../../utils/loadStore";



export interface InterUser {
    _id?: string;
    name: string;
    email: string;
    lastName?:string;
    nacionality?: string;
    password: string;
    createdAt?: Date;
    updatedAt?: Date;
}

export class User {
    _id?: string;
    name: string;
    lastName?:string;
    nacionality?: string;
    email: string;
    password: string;
    createdAt?: Date;
    updatedAt?: Date;

    constructor({name, email, password, lastName, nacionality, createdAt,updatedAt}: InterUser){
        const pathStoreUser= pathStore.users;
        
        this._id = String(pathStoreUser.length + 1);
        this.name= name;
        this.email= email;
        this.password= password;
        this.lastName= lastName;
        this.nacionality= nacionality;
        this.createdAt= createdAt ?? new Date();
        this.updatedAt= updatedAt ?? new Date();
    }
    isValid(){
        return this.name && this.email && this.password && this.lastName && this.nacionality && this.createdAt && this.updatedAt;
    }

}