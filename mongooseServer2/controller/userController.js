import User from "../model/userModel.js"

export const getAllUsers = async (req, res) => {
    try {
        const allUsers = await User.find()
        res.status(200).send(allUsers)
    } catch (error) {
        res.status(500).send({ error: "Something went wrong", msg: error.message })
    }
}

export const createUser = async (req, res) => {
    try {
        const userData = new User(req.body)
        await userData.save()
        res.status(201).send({ message: "User Added Successfully" })
    } catch (error) {
        res.status(500).send({ error: "Something went wrong", msg: error.message })
    }
}