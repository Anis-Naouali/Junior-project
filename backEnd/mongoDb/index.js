const mongoose = require("mongoose");
const mongoUri = "mongodb://127.0.0.1/workout";
mongoose.connect(mongoUri, { useUnifiedTopology: true, useNewUrlParser: true }).then(()=>{console.log("db mongo connected")}).catch(err=>console.log(err));
const db = mongoose.connection;
const Product = require ("./Product")

const getAllProducts = () => {
return Product.find()
};
const deleteOne = (id) => {
  console.log(id);
  return Product.findByIdAndDelete({ _id:id });
};
const update = (id, data) => {
  return Product.findOneAndUpdate({_id:id}, data, { new: true });
};

const add = (obj)=>{
return Product.create(obj)
}  

module.exports = {
  db,
  getAllProducts,
  deleteOne,
  update,
  add
};
