import {Router} from "express";
import sessionController from "../controllers/SessionController.js";

const router = Router();

router.post("/sessions", sessionController.createSession)
router.get("/sessions", sessionController.getSessions)
router.get("/sessions/:id", sessionController.getOneSession)
router.put("/sessions", sessionController.updateSession)
router.delete("/sessions/:id", sessionController.deleteSession)

export default router;