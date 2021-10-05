import mongoose from 'mongoose';

const Schema = mongoose.Schema;

interface Course {
  name: string;
  description: string;
  image: string;
  slug: string;
  videoId: string;
  createdAt: number;
  updatedAt: number;
}

const schema = new Schema<Course>({
  name: { type: String, maxlength: 255 },
  description: { type: String, maxlength: 600 },
  image: { type: String, maxlength: 255 },
  slug: { type: String, maxlength: 255 },
  videoId: { type: String, maxlength: 255 },
  createdAt: { type: Number, default: new Date().getTime() },
  updatedAt: { type: Number, default: new Date().getTime() },
});

export default mongoose.model('Course', schema);
