//import the create user function from the dbService file and run it


import { createUser,updateUser,getUser } from "../src/Services/userService";
import { Role } from "@prisma/client";

// create a new user
const newUser = async () => {
        const username = "testuser";
        const email= "ianmasika@gmail.com";
        console.log("Creating user...");

        const user = await createUser({
            email: email,
            username: username,
            id: "",
            avatarUrl: null,
            bio: null,
            role: Role.USER,
            favoriteGenres: [],
            createdAt:new Date,
            updatedAt:new Date,
        });
        console.log("User created:", user);

}

newUser();

const update= async () =>{
    const username = "testuser";
        const email= "ianmasika@gmail.com";
        console.log("Creating user...");

    const id="";
    const data={
             email: email,
            username: username,
            id: "",
            avatarUrl: null,
            bio: null,
            role:  Role.USER,
            favoriteGenres: [],
            createdAt:new Date,
            updatedAt:new Date,
    }
    const update= await updateUser(id,data);
    console.log(" user updated", update);
}
update();

const getInfo= async () =>{
    const id="";
    const info= await  getUser(id)
    console.log(info);
}