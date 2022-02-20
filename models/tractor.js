const mongoose = require('../database');

const tractorSchema = new mongoose.Schema(
    {
        name: {
          type: String,
          require: true,
          unique : true,
        },
        model: {
          type: String,
          require: true
        },
        modelYear: {
          type: Date
        },
        description: {
          type: String,
        },
        value: {
          type: Number
        },
        imageUrl: {
          type: String
        }
    }, { timestamps: true }
);

const Tractor = mongoose.model('Tractor', tractorSchema);
module.exports = Tractor;