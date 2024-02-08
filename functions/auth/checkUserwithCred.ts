import { collection, getDoc, getDocs, query, where } from "firebase/firestore";
import { db } from "../../database/firebase";
import IUser from "../../interfaces/userInterface";
const bcrypt = require('bcrypt');
const saltRounds = 10;

export default async function checkUserwithCred({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  try {
    let user: IUser[] = []
    const userRef = collection(db, "users");
    const q = query(userRef, where("email", "==", email));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach(doc => {
      user.push(doc.data() as IUser)
    })

    if (user.length !== 0) {
      const hash = user[0].authCredentials?.hashedPassword
      const match = await bcrypt.compare(password, hash);
      if (match) {
        return {
          success: true,
          message: 'user already exists',
          user: user[0]
        }
      } else {
        return {
          success: false,
          message: 'wrong password',
        }
      }
    } else {
      return {
        success: false,
        message: 'No match found'
      }
    }
  } catch (err) {
    console.log(err);
  }
}
