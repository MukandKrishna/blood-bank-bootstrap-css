const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    role: {
      type: String,
      required: [true, "role is required"],
      enum: ["admin", "organisation", "hospital", "user"],
    },
    secretkey: {
      type: String,
      required: function () {
        return this.role === "admin";
      },
    },
    name: {
      type: String,
      required: function () {
        return this.role === "admin" || this.role === "user";
      },
    },
    organisationName: {
      type: String,
      required: function () {
        return this.role === "organisation";
      },
    },
    website: {
      type: String,
      required: function () {
        return this.role === "organisation";
      },
    },
    address: {
      type: String,
      required: function () {
        return this.role === "organisation" || this.role === "user";
      },
    },
    fname: {
      type: String,
      required: function () {
        return this.role === "user";
      },
    },
    nukh: {
      type: String,
      required: function () {
        return this.role === "user";
      },
    },
    akaah: {
      type: String,
      required: function () {
        return this.role === "user";
      },
    },
    bloodgroup: {
      type: String,
      required: function () {
        return this.role === "user";
      },
    },
    dob: {
      type: Date,
      required: function () {
        return this.role === "user";
      },
    },
    donatedate: {
      type: Date,
      required: function () {
        return this.role === "user";
      },
    },
    currentcity: {
      type: String,
      required: function () {
        return this.role === "user";
      },
    },
    nativetown: {
      type: String,
      required: function () {
        return this.role === "user";
      },
    },
    email: {
      type: String,
      required: [true, "email is required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "password is required"],
    },
    contact: {
      type: String,
      required: [true, "contact is required"],
    },
    hideName: {
      type: String,
      enum: ["true", "false"],
      required: function () {
        return this.role === "user";
      },
    },
    otp: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("users", userSchema);

/*
  hospitalName: {
    type: String,
    required: function () {
      if (this.role === "hospital") {
        return true;
      }
      return false;
    },
  },
  */
// name: {
//   type: String,
//   required: [true, "name is required"],
// },
