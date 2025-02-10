import express from "express"
import { getAllUsers, createUser } from "../controller/userController.js";

const userRoutes = express.Router()

//!user APIs

// get all users data
userRoutes.get("/allusers", getAllUsers) //! http://localhost:1000/user/allusers

// create/add user
userRoutes.post("/create", createUser) //! http://localhost:1000/user/create


export default userRoutes;