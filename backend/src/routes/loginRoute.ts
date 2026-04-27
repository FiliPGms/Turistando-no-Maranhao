import { Router } from 'express'
import { userService } from '../services/userService';

const route = Router();

route.post("/Login", async (req,res)=>{
    const {email, password} = req.body;
    if(!email||!password){
        return res.status(400).json({error:"Email and password are required"});
    }

    try{
        const user = await userService.authenticateUser(email,password);
        if(!user){
            return res.status(404).json({error:"Invalid email or password!"});
        }

        return res.status(200).json({user});
    }catch(error){
        console.error("Login error: ", error);
        return res.status(500).json({error: "Internal server error"});
    }
});

export default route;