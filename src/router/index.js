import Router from "express";
import { responseMessage, statusCode } from "../helper/helper.js";
import { createContactForm, createFeedback } from "../controller/users.js";


const router = Router();

router.get("/checkServer", (req, res) => {
  return responseMessage({
    res,
    statusCode: statusCode.SUCCESS,
    message: "Called Successfully",
    success:1,
    
  });
});

router.post("/createContactForm", createContactForm);
router.post("/feedback", createFeedback);


export default router;
