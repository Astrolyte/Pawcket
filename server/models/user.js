const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: {
        type:String,required:true,unique:true
    },
    password:{
        type: String,
        required: true,
    minlength: [6, 'Password must be at least 6 characters long'],
    set:(value)=>bcrypt.hashSync(value,10)
    }
})

module.exports=mongoose.model('User',userSchema)