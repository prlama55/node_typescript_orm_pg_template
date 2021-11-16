import express from "express";
import UserController from "./user.controller";

const router = express.Router();

router.get("/", async (_req, res) => {
    const controller = new UserController();
    const response = await controller.getUsers();
    return res.send(response);
});

router.post("/", async (_req, res) => {
    const controller = new UserController();
    const response = await controller.createUser(_req.body);
    return res.send(response);
});

export default router;