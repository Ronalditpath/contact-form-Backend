import { Router } from "express";
import { responseData, statusCode } from "../helper/helper.js";

const router = Router();

router.get("/checkServer", (req, res) => {
  return responseData({
    res,
    statusCode: statusCode.SUCCESS,
    message: "Called Successfully",
  });
});

export default router;
