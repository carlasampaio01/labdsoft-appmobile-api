import { Router } from "express";
import InfoController from "./info.controller";
import GetUser from "../../infra/middleware/user.middleware";

const router = Router();

const controller = new InfoController();

router.get("/", GetUser(), controller.get);

export default router;
