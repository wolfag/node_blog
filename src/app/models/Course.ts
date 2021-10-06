import mongoose from 'mongoose';
const slug = require('mongoose-slug-generator');

mongoose.plugin(slug);

const Schema = mongoose.Schema;

interface Course {
  name: string;
  description: string;
  level: string;
  slug: string;
  videoId: string;
}

const schema = new Schema<Course>(
  {
    name: { type: String, maxlength: 255 },
    description: { type: String, maxlength: 600 },
    level: { type: String, maxlength: 255 },
    slug: { type: String, slug: 'name', unique: true },
    videoId: { type: String, maxlength: 255 },
  },
  { timestamps: true },
);

export default mongoose.model('Course', schema);
