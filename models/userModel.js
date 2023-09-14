const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    // role: {
    //   type: String,
    //   required: [true, "role is required"],
    //   enum: ["admin"],
    // },
    // name: {
    //   type: String,
    //   required: function () {
    //     if (this.role === "admin") {
    //       return true;
    //     }
    //     return false;
    //   },
    // },
    // organisationName: {
    //   type: String,
    //   required: function () {
    //     if (this.role === "organisation") {
    //       return true;
    //     }
    //     return false;
    //   },
    // },
    // hospitalName: {
    //   type: String,
    //   required: function () {
    //     if (this.role === "hospital") {
    //       return true;
    //     }
    //     return false;
    //   },
    // },
    name: {
      type: String,
      required: [true, "name is required"],
    },
    fname: {
      type: String,
      required: [true, "father name is required"],
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
    bloodgroup: {
      type: String,
      required: [true, "Blood Group is required"],
    },
    contact: {
      type: String,
      required: [true, "contact is required"],
    },
    dob: {
      type: Date,
      required: [true, "date of birth is required"],
    },
    currentcity: {
      type: String,
      required: [true, "current city is required"],
    },
    nativetown: {
      type: String,
      required: [true, "native town is required"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("users", userSchema);
