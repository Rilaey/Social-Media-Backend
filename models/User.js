// destructure required items from mongoose
const { Schema, model } = require("mongoose");

// require other models
const thoughtSchema = require('./Thought')

// email validation
require("mongoose-type-email");

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trimmed: true
    },
    email: {
      type: mongoose.SchemaType.email,
      required: true,
      unique: true
    },
    thoughts: [thoughtSchema],
    friends: [this._id]
  },
  {
    toJSON: {
      virtuals: true
    },
    id: false
  }
);

userSchema.virtual('friendCount').get(function() {
  return `${this.friends.length}`
});

const User = model('user', userSchema);

module.exports = {User, userSchema};