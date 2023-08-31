const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    role: {
      type: String,
      required: [true, "role is required"],
      enum: ["admin", "donar", "organisation", "hospital"],
    },
    name: {
      type: String,
      required: function () {
        if (this.role === "donor" || this.role === "admin") {
          return true;
        }
        return false;
      },
    },
    organisationName: {
      type: String,
      required: function () {
        if (this.role === "organisation") {
          return true;
        }
        return false;
      },
    },
    hospitalName: {
      type: String,
      required: function () {
        if (this.role === "hospital") {
          return true;
        }
        return false;
      },
    },
    email: {
      type: String,
      required: [true, "email is required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "password is requied"],
    },
    nukh: {
      type: String,
      required: [true, "nukh is requied"],
    },
    akaah: {
      type: String,
      required: [true, "akkah is requied"],
    },
    Bloodgroup: {
      type: String,
      required: [true, "Blood Group is required"],
    },
    contact: {
      type: String,
      required: [true, "contact is required"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("users", userSchema);
