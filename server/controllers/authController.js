import User from "../models/User.js";
import { generateRegistrationOptions, generateAuthenticationOptions } from "@simplewebauthn/server";

const rpID = "localhost"; // Change this to your domain in production

// Helper function to convert string to Uint8Array
const stringToUint8Array = (str) => new TextEncoder().encode(str);

export const registerPasskey = async (req, res) => {
  try {
    const { username } = req.body;
    let user = await User.findOne({ username });

    if (!user) {
      user = await User.create({ username });
    }

    const options = await generateRegistrationOptions({
      rpName: "MERN App",
      rpID,
      userID: stringToUint8Array(user._id.toString()), // 🔥 Convert user ID to Uint8Array
      userName: user.username,
    });
    console.log(
      "🚀 ~ file: authController.js ~ line 44 ~ registerPasskey ~ options",
      options
    );


    user.passkeys.push({ challenge: options.challenge });
    await user.save();

    res.json(options);
  } catch (error) {
    res.status(500).json({ message: "Error generating passkey options", error });
  }
};

export const authenticatePasskey = async (req, res) => {
  try {
    const { username } = req.body;
    const user = await User.findOne({ username });

    if (!user) return res.status(400).json({ message: "User not found" });

    const options = await generateAuthenticationOptions({ rpID });

    res.json(options);
  } catch (error) {
    console.error("Error generating authentication options", error);
    res.status(500).json({ message: "Error generating authentication options", error });
  }
};
