import express from 'express';
import { getAll, create, get, update, remove } from "../controllers/product";
const router = express.Router();

router.get("/products", getAll);
router.get("/products/:id", get);
router.post("/products", create);
router.put("/products/:id", update);
router.delete("/products/:id", remove);

export default router;