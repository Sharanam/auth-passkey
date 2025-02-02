import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  passkeys: { type: Array, default: [] }, // Store passkeys
});

export default mongoose.model("User", userSchema);
