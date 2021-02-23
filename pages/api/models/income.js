const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const income = new Schema(
  {
    inUber: {
      type: Number,
    },
    inBolt: {
      type: Number,
    },
    inFree: {
      type: Number,
    },
    inEats: {
      type: Number,
    },
    inCash: {
      type: Number,
    }
  },
  {
    timestamps: true,
  }
);
mongoose.model('Income', income)