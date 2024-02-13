import { doc, setDoc } from "firebase/firestore";
import IUser from "../../interfaces/userInterface";
import { z } from "zod";
import { db } from "../../database/firebase";
import checkUserExist from "./checkUserExist";
import bcrypt from 'bcryptjs'



interface INewUser {
    name: string;
    email: string;
    role: string;
    created: number;
    authCredentials?: {
        password: string
    }
}
const saltRounds = 10

export default async function createNewUser(user: INewUser, id: string) {
    try {

        const userExists = await checkUserExist(user?.email)

        if (!userExists.success && userExists.message === 'there was an error') {
            return userExists
        } else if (!userExists.success && userExists.message === 'user doesnot exist') {
            if (user?.authCredentials?.password) {
                const salt = bcrypt.genSaltSync(saltRounds);
                const hash = bcrypt.hashSync(user?.authCredentials?.password, salt);
                user = { ...user, authCredentials: { password: hash } }
            }

            const ref = doc(db, "users", id);
            await setDoc(ref, user);

            console.log('user created successfully')
            return {
                success: true,
                message: 'user added successfully'
            }
        }

        return userExists

    } catch (error) {
        console.log(error)
        return {
            success: false,
            message: 'There was an error'
        }
    }
}
