import express from "express";
import PingController from "../controllers/ping";
import UserRouter from '../modules/users/user.router'
const router = express.Router();
router.use("/users", UserRouter);
router.get("/ping", async (_req, res) => {
    const controller = new PingController();
    const response = await controller.ping();
    return res.send(response);
});

export default router;