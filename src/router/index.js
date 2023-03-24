import Router from "express";
import { responseData, statusCode } from "../helper/helper.js";
import { createContactForm } from "../controller/users.js";


const router = Router();

router.get("/checkServer", (req, res) => {
  return responseData({
    res,
    statusCode: statusCode.SUCCESS,
    message: "Called Successfully",
  });
});

router.post("/createContactForm", createContactForm)


export default router;
