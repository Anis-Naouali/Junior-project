const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const productSchema = new mongoose.Schema({
    name: String,
    description: String,
    imageUrl: String,
    categories: {
      type: String,
      enum: ["chest", "shoulders", "back", "legs"],

    }
  });
  
const Product = mongoose.model("Product", productSchema);

module.exports = Product;