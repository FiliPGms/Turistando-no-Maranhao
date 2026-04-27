import { userService } from "../services/userService.js";

// const initialUsers = [
//   { name: "pedro", email: "pedroGames@gmail.com" },
//   { name: "maria", email: "maria@gmail.com" },
//   { name: "marcos", email: "marcos@gmail.com" }
// ];

// export const userController = {
//   async setupDatabase() {
//     console.log("Cleaning database...");
//     await userService.clearAll();
    
//     console.log("Seeding initial users...");
//     const users = await userService.createMany(initialUsers);
//     console.log(`Created ${users.length} users.`);
//     return users;
//   },

//   async updateUserData(id: number) {
//     console.log(`Updating user ${id}...`);
//     const updated = await userService.updateById(id, {
//       name: "joao",
//       email: "joaofilipv@gmail.com"
//     });
//     return updated;
//   },

//   async listAllUsers() {
//     const users = await userService.getAll();
//     console.log("All users in database:", JSON.stringify(users, null, 2));
//     return users;
//   }
// };
