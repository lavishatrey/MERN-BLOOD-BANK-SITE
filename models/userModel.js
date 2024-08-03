const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    role: {
      type: String,
      
      enum: ["admin", "organisation", "donar", "hospital"],
    },
    name: {
      type: String,
     
    },
    organisationName: {
      type: String,
    
    },
    hospitalName: {
      type: String,
   
    },
    email: {
      type: String,
     
      
    },
    password: {
      type: String,
     
    },
    website: {
      type: String,
    },
    address: {
      type: String,
      
    },
    phone: {
      type: String,
     
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("users", userSchema);
