const { model } = require('mongoose');
const { HoldingsSchema } = require('../schemas/HoldingsSchema.js');

const HoldingModel = model("holding", HoldingsSchema); // ✅ no `new`

module.exports = { HoldingModel };
