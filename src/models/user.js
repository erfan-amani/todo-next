import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

userSchema.statics.findByCredential = async function (email, password) {
  const user = await User.findOne({ email });

  if (!user) {
    // not throw error becuse if user not exist we go for registeration
    return null;
  }

  const isMatched = await bcrypt.compare(password, user.password);

  if (!isMatched) {
    const error = new Error("Password not matched!");
    error.status = 400;
    throw error;
  }

  return user;
};

userSchema.pre("save", async function (next) {
  const user = this;

  try {
    if (user.isModified("password")) {
      user.password = await bcrypt.hash(user.password, 8);
    }

    next();
  } catch (err) {
    next(err);
  }
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
