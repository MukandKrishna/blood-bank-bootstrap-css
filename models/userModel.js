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
        if (this.role === "organisation") {
          return true;
        }
        return false;
      },
    },

    website: {
      type: String,
      required: function () {
        if (this.role === "organisation") {
          return true;
        }
        return false;
      },
    },
    address: {
      type: String,
      required: [true, "address is required"],
      required: function () {
        if (this.role === "organisation" || this.role === "user") {
          return true;
        }
        return false;
      },
    },
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
    fname: {
      type: String,
      required: [true, "father name is required"],
      required: function () {
        return this.role === "user";
      },
    },

    nukh: {
      type: String,
      required: [true, "nukh is required"],
      required: function () {
        return this.role === "user";
      },
    },

    akaah: {
      type: String,
      required: [true, "akkah is requied"],
      required: function () {
        return this.role === "user";
      },
    },

    bloodgroup: {
      type: String,
      required: [true, "Blood Group is required"],
      required: function () {
        return this.role === "user";
      },
    },

    dob: {
      type: Date,
      required: [true, "date of birth is required"],
      required: function () {
        return this.role === "user";
      },
    },

    donatedate: {
      type: Date,
      required: [false, "donated date is required"],
      required: function () {
        return this.role === "user";
      },
    },

    currentcity: {
      type: String,
      required: [true, "current city is required"],
      required: function () {
        return this.role === "user";
      },
    },
    nativetown: {
      type: String,
      required: [true, "native town is required"],
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
      required: [true, "password is requied"],
    },

    contact: {
      type: String,
      required: [true, "contact is required"],
    },

    hideName: {
      type: String,
      enum: ["yes", "no"],
      // default: "",
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
