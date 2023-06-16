import express from "express";
import { checksForRegister, isUserValid } from "../middlewares/authMiddleware.js";
import { register } from "../controllers/userControllers.js";
import { getAstro, getTemp, getWindSpeed } from "../controllers/whetherController.js";


var router = express.Router();

router.post('/register',checksForRegister,register);
router.post('/getTemp',isUserValid,getTemp);
router.post('/getAstro',isUserValid,getAstro);
router.post('/getWindSpeed',isUserValid,getWindSpeed);


// getWindSpeed
export default router;