const { Schema, model, plugin } = require('mongoose');
const MongooseDelete = require('mongoose-delete');

const slug = require('mongoose-slug-generator');

plugin(slug);

const Course = new Schema(
  {
    name: { type: String, maxlength: 255 },
    description: { type: String, maxlength: 600 },
    level: { type: String, maxlength: 255 },
    slug: { type: String, slug: 'name', unique: true },
    videoId: { type: String, maxlength: 255 },
  },
  { timestamps: true },
);
Course.plugin(MongooseDelete, {
  overrideMethods: 'all',
  deletedBy: true,
  deletedAt: true,
});

module.exports = model('Course', Course);
