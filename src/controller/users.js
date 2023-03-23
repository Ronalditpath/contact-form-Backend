import { send } from "../helper/helper.js";
import contactForm from "../services/users.js";
import { responseData, statusCode } from "../helper/helper.js";


export const createContactForm = async (request, response) => {
    try {
        const result = await contactForm(request.body);
        if (!result)
            return send({ response, statusCode: statusCode.BADREQUEST, message: "Bad Request" })
        send({ response, ...result })
    }
    catch (error) {
        throw Error(error)
    }
}
