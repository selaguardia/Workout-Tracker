const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// static signup method
userSchema.statics.signup = async function(firstName, lastName, email, password) {
  // validation
  if(!firstName || !lastName || !email || !password) {
    throw Error("Sorry, all fields must be filled.")
  }
  if(!validator.isEmail(email)) {
    throw Error("Sorry, please enter a valid email.")
  }
  if(!validator.isStrongPassword(password)){
    throw Error("Sorry, your password is not strong enough.")
  }

  const exists = await this.findOne({ email });

  if (exists) {
    throw Error("Sorry, email is already in use.");
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({firstName, lastName, email, password: hash});

  return user;

};

module.exports = mongoose.model("User", userSchema);
