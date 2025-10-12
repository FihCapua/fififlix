import { Router } from "express";
import { movieController } from "../controllers/movieController";

const router = Router();

router.get("/", movieController.getAll);
router.get("/search", movieController.search);
router.post("/", movieController.create);
router.put("/:id", movieController.update);
router.delete("/:id", movieController.delete);

export default router;