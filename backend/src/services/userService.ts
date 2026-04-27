import { json } from "node:stream/consumers";
import { prisma } from "../config/database.js";

export const userService = {
  async createUser(data: { name: string; email: string; password: string }){
    return await prisma.usuario.create({data})
  },

  async authenticateUser(email:string,password:string){
    const user = await prisma.usuario.findUnique({
      where: {email}
    });

    if(!user){
      return null;
    }

    if(user.password != password){
      return null;
    }

    return user;
  },

  async getAll() {
    return await prisma.usuario.findMany();
  },

  async getUserId(email:string){
    const user = await prisma.usuario.findUnique({
      where: {email}
    })

    return user?.id;
  },

  async getById(userId:number){
    return await prisma.usuario.findUnique({
      where: {id:userId}
    })
  },

  async updateById(userId: number, data: { name?: string; email?: string }) {
    return await prisma.usuario.update({
      where: { id: userId },
      data
    });
  },

  async deleteById(userId: number) {
    return await prisma.usuario.delete({
      where: { id: userId }
    });
  }
};
