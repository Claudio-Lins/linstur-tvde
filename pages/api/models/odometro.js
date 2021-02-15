const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const odometro = new Schema(
  {
    kmInicio: {
      type: Number,
    },
    kmFim: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);
mongoose.model('Odometro', odometro)