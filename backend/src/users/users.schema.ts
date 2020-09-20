import { Schema, Document } from 'mongoose';

export interface IUser {
  _id?: string;
  name: string;
  lastName: string;
  mail: string;
  password: string;
  whatsapp: string;
  bio: string;
}

export const schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },
    mail: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    whatsapp: {
      type: String,
      required: true,
    },
    bio: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      transform: (_, ret): void => {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
      },
    },
  },
);

export interface IUserModel extends Omit<IUser, '_id'>, Document {}