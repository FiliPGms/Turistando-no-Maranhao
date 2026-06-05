import type { Request, Response } from 'express';
import { userService } from "../services/userService.js";
import type{ CreateUserDto } from '../dtos/userDto.js';


export const userController = {
  async login(req: Request, res: Response) {
    const {email, password} = req.body;

    if(!email || !password){
        return res.status(400).json({message:"Email and password are required!"});
    }
    
    try{
        const user = await userService.authenticateUser(email,password);

        if(!user){
            return res.status(401).json({message: "Invalid credentials"});
        }

        return res.json({message:"Login sucessfully!", user});

    }catch(error){
        return res.status(500).json({message:"Internal server error!", error});
    }
    },

    async register(req: Request<{}, {}, CreateUserDto>, res: Response) {
        const {email, name, password} = req.body;

        if(!email || !password || !name){
            return res.status(400).json({message:"Email and password are required!"});
        }

        try{
            const user = await userService.createUser(req.body);

            if(!user){ //prisma já detecta se o email vai existir porque coloquei @unique no schema, então eu retorno um "invalid credentials" mesmo.
                return res.status(401).json({message: "Invalid credentials"});
            }

            return res.status(201).json({message:"User registered successfully!", user});

        }catch(error){
            return res.status(500).json({message:"Internal server error!", error});
        }
    }
}