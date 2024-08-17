import mongoose, { Schema } from "mongoose";

const newsSchema = new Schema({
  date: Date,
  title: String,
  content: String,
},
{timestamps: true});

const News = mongoose.models.News || mongoose.model("News", newsSchema);

export default News;

