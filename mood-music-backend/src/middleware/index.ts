import cors from "cors";
import express from "express";
import { Express } from "express"; 

export function setupMiddleware(app: Express) {
  app.use(cors()); // 
  app.use(express.json()); 
}