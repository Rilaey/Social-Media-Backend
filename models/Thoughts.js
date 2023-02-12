// destructure required items from mongoose
const { Schema, model } = require("mongoose");

// reaction schema that will be a sub-document
const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId()
    },
    reactionBody: {
      type: String,
      required: true,
      max_length: 280
    },
    username: {
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: formatThisDate
    }
  },
  {
    toJSON: {
      virtuals: true,
      getters: true
    },
    id: false
  }
);

// thought schema
const thoughtsSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      min_length: 1,
      max_length: 250
    },
    createdAt: {
      type: Date,
      default: Date.now()
    },
    username: {
      type: String,
      required: true
    },
    reactions: [
      reactionSchema
      // {
      //   type: Schema.Types.ObjectId,
      //   ref: "reaction"
      // }
    ]
  },
  {
    toJSON: {
      virtuals: true,
      getters: true
    },
    id: false
  }
);

// getter method to format date
function formatThisDate() {
  return new Date().toLocaleDateString("en-us", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric"
  });
}

// return length of reactions
thoughtsSchema.virtual("reactionCount").get(function () {
  return `${this.reactions.length}`;
});

module.exports = model('thoughts', thoughtsSchema)
