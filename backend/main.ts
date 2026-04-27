import { userController } from "./src/controllers/userController.js";
import { prisma } from "./src/config/database.js";

async function main() {
  try {
    // 1. Initial Setup (Model Initialization)
    const users = await userController.setupDatabase();
    
    // 2. Logic Execution (Controller)
    if (users[0]) {
      const firstUserId = users[0].id;
      const updatedUser = await userController.updateUserData(firstUserId);
      console.log("Updated user details:", updatedUser);
    }

    // 3. Final State (View Data Preparation)
    await userController.listAllUsers();

  } catch (error) {
    console.error("Critical Error:", error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

main();
