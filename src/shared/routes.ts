import express from "express";
import UserRouter from '../modules/users/user.router'
// @ts-ignore
import appInfo from "../../package.json";

const router = express.Router();
router.use("/users", UserRouter);

router.get("/ping", async (_req, res) => {
    return res.send({
        version: appInfo?.version || "0.0.1",
        message: "Server is up and running",
    });
});

export default router;