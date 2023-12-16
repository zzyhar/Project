import express from "express";
import { test } from "../controllers/user.controller.js";


const router = express.Router(); 

// /:id dynamic request.body.id  
router.get('/test', test);

export default router; 