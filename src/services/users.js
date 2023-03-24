import { statusCode } from '../helper/helper.js';
import contactUs from '../model/contactUs.js';
import Feedback from '../model/feedback.js';


export const contactForm = async (body) => {
    const { email } = body
    const emailExists = await contactUs.findOne({ email });
    if (emailExists)
        return { statusCode: statusCode.BADREQUEST, message: "Email Id Already Exists" };
    const result = await contactUs.create(body);
    return ({ statusCode: statusCode.SUCCESS, message: "Contact From Submitted Successfully", result })
}

export const feedbackForm = async(body) => {
    const { email } = body
    const emailExists = await Feedback.findOne({ email });
    if (emailExists)
        return { statusCode: statusCode.BADREQUEST, message: "Email Id Already Exists" };
    const result = await Feedback.create(body);
    return ({ statusCode: statusCode.SUCCESS, message: "Feedback Submitted Successfully", result })
}

// export default contactForm