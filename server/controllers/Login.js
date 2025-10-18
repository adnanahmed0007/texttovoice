import Signupmodel from "../models/UserMode.js";
import bcrypt from "bcrypt";
const LoginController = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await Signupmodel.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "User not found" });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }
        res.status(200).json({ message: "Login successful", user });
        // Perform login logic here
    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

export default LoginController;