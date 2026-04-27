import { error } from "node:console";
import { prisma } from "../config/database"

export const commentService = {
    async getCommentsByUserId(userId : number){
        return await prisma.comentarios.findMany({
            where:{authorId:userId}
        })
    },

    async editComment(id:number,content:string|null){
        try{
            const comment = await prisma.comentarios.findUnique({
                where: {id}
            });

            if(!comment){
                throw new Error("Comment not found!")
            }
    
            return await prisma.comentarios.update({
                where: {id},
                data : {content}
            });
        }catch(error){
            console.error("error message: ", error);
        }
    },

    async deleteComment(id:number){
        
        try{
            const comment = await prisma.comentarios.findUnique({
                where: {id}
            });

            if(!comment){
                throw new Error("Comment not found!")
            }
    
            return await prisma.comentarios.delete({
                where: {id} 
            })
        }catch(error){
            console.error("error message: ", error);
        }
        
        
    }
}