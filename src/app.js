import express from 'express';
import mongoose from 'mongoose';
import productRouter from "./routers/product";

const app = express();
app.use(express.json());
app.use("/api", productRouter);
mongoose.connect("mongodb://localhost:27017/we17301");
export const viteNodeApp = app;