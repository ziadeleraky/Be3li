import db from "../../../../lib/db";
import productsModel from "../../../../lib/products.schema";

export default async function handler(req, res) {
  try {
    await db();
    if (req.method === "GET") {
      const products = await productsModel.find({});
      res.status(200).json(products);
    } else if (req.method === "POST") {
      await productsModel.create(req.body);
      res.status(201).json({ message: "Product created successfully", data: req.body });
    }
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}
