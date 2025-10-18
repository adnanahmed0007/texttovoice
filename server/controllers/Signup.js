
import Signupmodel from "../models/UserMode.js";
import bcrypt from "bcrypt"
import GenratedTojken from "../utils/Genratedtoken.js";
const Signup = async (req, res) => {
    try {
        const { name, email, phone, password, confirmPassword } = req.body;
        if (name && email && password && confirmPassword && phone) {
            if (password == confirmPassword) {
                const finduser = await Signupmodel.findOne({ $or: [{ email }, { phone }] })
                if (finduser) {
                    console.log(finduser)
                    return res
                        .status(400)
                        .json({
                            message: "user already regitre login"
                        })
                }
                else {
                    const hashedpassword = await bcrypt.hash(password, 5);
                    const newuser = new Signupmodel({
                        email: email.trim(),
                        name: name.trim(),
                        phone: phone.toString(),
                        password: hashedpassword,
                    })
                    await newuser.save();
                    const chcek = await GenratedTojken(newuser._id, res);
                    if (!chcek) {
                        return res
                            .status(401)
                            .json({
                                message: "token Generaton failed"
                            })
                    }
                    else {

                        return res
                            .status(201)
                            .json({
                                message: "user data is saved sucessfully",
                                newuser,
                            })

                    }





                }


            }
            else {
                return res
                    .status(400)
                    .json({
                        message: "password does not matched"
                    })
            }
        }
    }
    catch (e) {
        console.log(e);
        return res
            .status(500)
            .json({
                message: "internal server errpr + " + " " + e,
            })
    }
}
export default Signup;