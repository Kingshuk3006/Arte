import mongoose from 'mongoose';
import dotenv from "dotenv";
dotenv.config()

mongoose.connect ('mongodb://localhost:27017/userDB', {useNewUrlParser: true});

const {Schema} = mongoose;

const userSchema = new Schema ({
  name: String,
  email: String,
  avatar: String,
  cloudinary_id: String
});

const User = mongoose.models.User || mongoose.model ('User', userSchema);

const user = new User({
  name: "Kingshuk Sarkar",
  email:"kingsarkar2006@gmail.com"
})

user.save();

