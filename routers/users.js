import { Router } from "express";
import createUser from "../controllers/users/createUser.js";
import deleteUser from "../controllers/users/deleteUser.js";
import getUser from "../controllers/users/getUser.js";
import getUsers from "../controllers/users/getUsers.js";
import updateUser from "../controllers/users/updateUser.js";

const router = Router();

router.post("/users", createUser);
router.get("/users", getUsers);
router.get("/users/:id", getUser);
router.patch("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);

export default router;
