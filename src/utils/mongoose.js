const multipleMongooseToObject = (list) => list.map((item) => item.toObject());

const mongooseToObject = (item) => item.toObject();

module.exports = {
  multipleMongooseToObject,
  mongooseToObject,
};
