// import { comparePassword } from "../../utils/passwordUtils";
import fs from "fs";
import { InterUser, User } from "../models/user_model";
import path from "path";
// import pathStore from "../store/storeUserData.json"

// import path from "path";
// import pathStore from "../../"

interface UserData {
    users: InterUser[];
} 

// const storeDir = path.join(__dirname, "../../store");

// const pathStoreUser = path.join(storeDir, "storeUserData.json");
// if(!fs.existsSync(pathStoreUser)){
//     fs.writeFileSync(pathStoreUser, JSON.stringify({users:[]}, null, 2));
// }
// const storeDir = path.join(process.cwd(), "store");

// // Verifica si la carpeta existe, si no, la crea
// if (!fs.existsSync(storeDir)) {
//     fs.mkdirSync(storeDir, { recursive: true });
// }

// const pathStoreUser = path.join(storeDir, "storeUserData.json");

// console.log("Directorio de la tienda:", storeDir);
// console.log("Ruta completa del archivo:", pathStoreUser);

// Crea el archivo si no existe
// if (!fs.existsSync(pathStoreUser)) {
//     fs.writeFileSync(pathStoreUser, JSON.stringify({ users: [] }, null, 2));
// }

class UserRepository{
    pathStoreUser: string;

    constructor(){
        // this.pathStoreUser = path.join(process.cwd(), "store", "storeUserData.json");
        // this.pathStoreUser = "../../store/storeUserData.json";
        // const storeDir = path.join(process.cwd(), "store");
        this.pathStoreUser = "../store/storeUserData.json";
         // Crea la carpeta y el archivo si no existen
         const storeDir = path.dirname(this.pathStoreUser);
         if (!fs.existsSync(storeDir)) {
             fs.mkdirSync(storeDir, { recursive: true });
         }
         if (!fs.existsSync(this.pathStoreUser)) {
             fs.writeFileSync(this.pathStoreUser, JSON.stringify({ users: [] }, null, 2));
         }
     
 
        // console.log(this.pathStoreUser);

        // Crea la carpeta y el archivo si no existen
        // if (!fs.existsSync(storeDir)) {
        //     fs.mkdirSync(storeDir, { recursive: true });
        // }
        // if (!fs.existsSync(this.pathStoreUser)) {
        //     fs.writeFileSync(this.pathStoreUser, JSON.stringify({ users: [] }, null, 2));
        // }


    }
    // Funcion para pedir toda la info almacenado del usuario 
    readData(): UserData{
        const data = fs.readFileSync(this.pathStoreUser, 'utf-8');
        return JSON.parse(data);
    }
    writeData(data: UserData){
        fs.writeFileSync(this.pathStoreUser, JSON.stringify(data, null, 2));
    }

    async saveUser(user: InterUser){
        const newUser = new User(user);
        if(!newUser.isValid()){
            throw new Error("Invalid user data");
        }

        const data = this.readData();
        data.users.push(newUser);
        this.writeData(data);
    }

    async getAllUsers(){
        const data = this.readData();
        return data.users;
    }

}

const userRepoInstance = new UserRepository();

export {userRepoInstance, UserRepository}