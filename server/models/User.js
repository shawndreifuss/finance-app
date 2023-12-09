const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    first: {    
        type: String,
        required: true,
        trim:true,
        min: 3,
        max: 20,
    },
    last: { 
        type: String,
        required: true,
        trim:true,
        min: 3,
        max: 20,
    },
    email: {
        type: String,
        required: true,
         unique: true,
        trim:true,
        max: 50,
    },
    password: {
        type: String,
        required: true,
        trim:true,
        min: 6,
        
    },
},
{
    toJSON: {
      virtuals: true,
      timestamp: true,
    },
    id: false,
  }
);



// Create a virtual property `fullName` that gets and sets the user's full name
UserSchema
.virtual('fullName')
// Getter
.get(function () {
  return `${this.first} ${this.last}`;
})
// Setter to set the first and last name
.set(function (v) {
  const first = v.split(' ')[0];
  const last = v.split(' ')[1];
  this.set({ first, last });
});



module.exports = mongoose.model("User", UserSchema);