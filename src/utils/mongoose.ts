import mongoose, { Document } from 'mongoose';

export const multipleMongooseToObject = (list: Document<any, any, any>[]) =>
  list.map((item) => item.toObject());

export const mongooseToObject = (item: Document<any, any, any>) =>
  item.toObject();
