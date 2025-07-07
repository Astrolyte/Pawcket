const User = require('../models/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const signup = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const existing = await User.findOne({ email })
        if (existing)
        {
            return res.status(400).json({msg:"User already exists"})
        }
        const user = await User.create({ name, email, password })
        const token = jwt.sign({ id: user._id, name: user.name }, process.env.JWT_SECRET, { expiresIn: '2h' })
        res.status(201).json({
            token, user: {
                name: user.name,
                email: user.email,
                password:user.password
        }})
    }
    catch (err)
    {
        res.status(500).json({msg:'Signup error',error:err.message})
    }
};
const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email })
        if (!user)
            return res.status(400).json({ msg: "Invalid email or password" })
        const match = await bcrypt.compare(password, user.password)
        if (!match)
            return res.status(400).json({ msg: "Invalid email or password" });
        const token = jwt.sign(
            { id: user._id, name: user.name },
            process.env.JWT_SECRET,
            { expiresIn: "2h" }
        );
        res.status(200).json({
            token, user: {
                name: user.name,
                email: user.email,
                password: user.password
            }
        })
    }

    catch (err) {
        res.status(500).json({ msg: 'Login error', error: err.message })
    }
}



    
  //console.log("yeslo");


module.exports = {signup,login}
