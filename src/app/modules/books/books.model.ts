import { Schema, model } from "mongoose";
import { IBooks, IBooksModel } from "./books.interface";

const booksSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    comments: [
      {
        type: String,
      },
    ],
    genre: {
      type: String,
      required: true,
    },
    publicationDate: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Books = model<IBooks, IBooksModel>("books", booksSchema);
