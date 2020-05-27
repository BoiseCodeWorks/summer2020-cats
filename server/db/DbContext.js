import ValueSchema from "../models/Value";
import mongoose from "mongoose";
import Cat from "../models/Cat";

class DbContext {
  // NOTE DB-Collections
  constructor() {
    this.Values = mongoose.model("Value", ValueSchema);
    this.Cats = mongoose.model("Cat", Cat);
  }
}

export const dbContext = new DbContext();
