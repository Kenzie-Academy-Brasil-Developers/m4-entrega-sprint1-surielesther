import { Router } from "express";

import createUserController from "../controllers/createUser.controller";
import listUsersController from "../controllers/listUsers.controller";
import updateUserController from "../controllers/updateUser.controller";
import deleteUserController from "../controllers/deleteUser.controller";
import userLoginController from "../controllers/userLogin.controller";
import userProfileController from "../controllers/userProfile.controller";

import verifyEmailAvailability from "../middlewares/verifyEmailAvailability.middleware";
import verifyAuthTokenMiddleware from "../middlewares/verifyAuthToken.middleware";
import verifyIsAdmMiddleware from "../middlewares/verifyIsAdm.middleware";

const router = Router();

router.post("", verifyEmailAvailability, createUserController);
router.get(
  "",
  verifyAuthTokenMiddleware,
  verifyIsAdmMiddleware,
  listUsersController
);
router.get("/profile", verifyAuthTokenMiddleware, userProfileController);
router.put("/:id", verifyAuthTokenMiddleware, updateUserController);
router.delete("/:id", verifyAuthTokenMiddleware, deleteUserController);
router.post("/login", userLoginController);

export default router;
