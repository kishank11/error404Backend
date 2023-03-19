const express = require("express");
const User = require("../models/User");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")


const app = express();
const router = express.Router();


const login = async (req, res) => {


    try {
        const { email, role, password } = req.body;


        const user = await User.find({ email: email });
        console.log(user)

        if (!user) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        const isValidPassword = req.body.password === user[0].password;

        if (!isValidPassword) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }


        // const token = jwt.sign({ email: user.email, role: user.role }, 'secretkey');


        return res.json({ user });


    } catch (error) {
        console.log(error)
    }
}



const register = async (req, res) => {
    try {



        const { email, role, password } = req.body;









        const user = await User.create({
            email,
            role,
            password: password,
        });




        // const token = jwt.sign({ email, role }, 'secretkey');


        return res.json({ user });
    } catch (error) {
        console.log(error)
    }
}


module.exports = { login, register }