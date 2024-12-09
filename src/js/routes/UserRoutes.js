import {Router} from "express";
import userController from "../controllers/UserController.js";

const router = Router();

router.post("/users", userController.createUser)
router.get("/users", userController.getUsers)
router.get("/users/:id", userController.getOneUser)
router.put("/users", userController.updateUser)
router.delete("/users/:id", userController.deleteUser)

export default router;