import { Router } from "express";
import { todoController } from "../controller/todo.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = Router();

// GET /todos
router.get("/", authMiddleware, todoController.read);

// GET /todos/:id
router.get("/:id", authMiddleware, todoController.readById);

// POST /todos
router.post("/", authMiddleware, todoController.create);

// PUT /todos/:id
router.put("/:id", authMiddleware, todoController.update);

router.delete("/:id", authMiddleware, todoController.remove);

export default router;
