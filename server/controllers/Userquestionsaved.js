
import Userdatamodel from "../models/Userdatamodel.js";
const Userquestionsaved = async (req, res) => {
    try {
        const user_id = req.user.user_id;

        const { UseraskedQuestion } = req.body;
        console.log("User asked question:", UseraskedQuestion);

        if (UseraskedQuestion === undefined) {
            return res.status(400).json({ message: "user_id and question are required" });
        }
        const newQuestion = new Userdatamodel({
            user_id,
            UseraskedQuestion
        });
        await newQuestion.save();
        res.status(201).json({ message: "Question saved successfully", newQuestion });
    } catch (error) {
        console.error("Error saving question:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};
export default Userquestionsaved;