import mongoose, { Schema } from "mongoose";

const productSchema = new Schema({
<<<<<<< HEAD
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  imageUrl: { type: String, required: true },
=======
  name: { type: String, required: true, trim: true, maxlength: 100 },
  description: { type: String, required: true, trim: true, maxlength: 500 },
  price: { type: Number, required: true, min: 0 },
  category: { type: String, required: true, trim: true },
  imageUrl: { type: String, required: true, trim: true },
>>>>>>> d7ff8f2ae99d23ec9cb7f8abaef4423994071978
  inStock: { type: Boolean, required: true },
});

const Product = mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;
