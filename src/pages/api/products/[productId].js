import db from "../../../../lib/db";
import productsModel from "../../../../lib/products.schema";

export default async function handler(req, res) {
  try {
    const { productId } = req.query;
    await db();
    if (req.method === "GET") {
      const product = await productsModel.findById(productId);
      if (!product) {
        res.status(404).json({ message: `Product with id ${productId} not found` });
      } else {
        res.status(200).json(product);
      }
    } else if (req.method === "DELETE") {
      const product = await productsModel.findByIdAndDelete(productId);
      if (!product) {
        res.status(404).json({ message: `Product with id ${productId} not found` });
      } else {
        res.status(200).json({ message: "Product deleted successfully" });
      }
    } else if (req.method === "PUT") {
      const product = await productsModel.findByIdAndUpdate(productId, req.body, { new: true });
      if (!product) {
        res.status(404).json({ message: `Product with id ${productId} not found` });
      } else {
        res.status(200).json(product);
      }
    }
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}
