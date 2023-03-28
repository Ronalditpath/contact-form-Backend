import { statusCode } from "../helper/helper.js";
import contactUs from "../model/contactUs.js";
import Feedback from "../model/feedback.js";

export const contactForm = async (body) => {
  const { email } = body;
  const emailExists = await contactUs.findOne({ email });
  if (emailExists)
    return {
      statusCode: statusCode.BADREQUEST,
      message: "Email Id Already Exists",
      success: 0,
    };
  const result = await contactUs.create(body);
  if (!result)
    return {
      statusCode: statusCode.SERVER_ERROR,
      message: "Something went wrong",
      success: 0,
    };

  return {
    statusCode: statusCode.SUCCESS,
    message: "Contact From Submitted Successfully",
    result,
    success: 1,
  };
};

export const feedbackForm = async (body) => {
  const { email } = body;
  const emailExists = await Feedback.findOne({ email });
  if (emailExists)
    return {
      statusCode: statusCode.BADREQUEST,
      message: "Email Id Already Exists",
      success: 0,
    };
  const result = await Feedback.create(body);
  if (!result)
    return {
      statusCode: statusCode.SERVER_ERROR,
      message: "Something went wrong",
      success: 0,
    };
  return {
    statusCode: statusCode.SUCCESS,
    message: "Feedback Submitted Successfully",
    result,
    success: 1,
  };
};

