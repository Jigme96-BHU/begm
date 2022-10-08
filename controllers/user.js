const User = require("../schema/user");
const PasswordReset = require("../schema/forgotPassword");
const bycrpt = require('bcryptjs');
exports.register = async (req,res) =>{
    const {email, password } = req.body;

    if(!email || !password){
        return res.json({
            status:false,
            message: "Please provide email and password"
        })
    }

    const response = await User.find({email:email});

    if(response.length > 0){
        return res.json({
            message: 'The email is already used',
            status:false
        })
    }

    let hashedPassword = await bycrpt.hash(password, 8);
    User.create({email,hashedPassword},(error,results)=>{
        if(error){
            console.log(error);
        }else{
            return res.json({
                status: true,
                message: 'User Registered'
            })
        }
    });
} 

exports.login = async (req, res) =>{
    try {
        const {email,password} = req.body;

        if(!email || !password){
            return res.json({
                status:false,
                message: 'Please provide an Email and Password'
            })
        }
        
        const response = await User.find();
    

        if(!response || !(await bycrpt.compare(password, response[0].hashedPassword))){
            res.json({
                status: false,
                message: 'Email or Password Incorrect'
            })
        }else{

            res.json({
                status: true,
                message:"Sucessfull"
            })
        }

    } catch (error) {
        console.log(error);
    }
}