import { Router } from "express";
import AuthController from "./auth.controller";
import Validations from "./auth.validations";

const router = Router();
const controller = new AuthController();

router.post("/login", Validations.login, controller.login);
router.post("/register", Validations.login, controller.register);
router.post("/recover", Validations.recover, controller.recover);
router.post("/reset", Validations.reset, controller.resetPassword);
router.put(
  "/update",
  Validations.authenticated,
  Validations.update,
  controller.update
);
router.put(
  "/change-password",
  Validations.changePassword,
  controller.changePassword
);

export default router;
