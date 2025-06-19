const {model} = require('mongoose');
const {PositionsSchema} = require('../schemas/PositionsSchema.js');
const PostionsModel =  model('position' , PositionsSchema);
module.exports = {PostionsModel};