import { describe, expect, it } from "vitest";
import Product from "@/database/productSchema";

const validProduct = {
  name: "Beach Chair",
  description: "A comfortable folding chair.",
  price: 25,
  category: "Beach Gear",
  imageUrl: "https://example.com/chair.jpg",
  inStock: true,
};

describe("Product schema", () => {
  it("Accepts a valid product", () => {
    const product = new Product(validProduct);

    const validationError = product.validateSync();

    expect(validationError).toBeUndefined();
  });

  it("rejects a product without a name", () => {
    const product = new Product({
      ...validProduct,
      name: undefined,
    });

    const validationError = product.validateSync();

    expect(validationError?.errors.name).toBeDefined();
  });

  it("rejects a product with a negative price", () => {
    const product = new Product({
      ...validProduct,
      price: -1,
    });

    const validationError = product.validateSync();

    expect(validationError?.errors.price).toBeDefined();
  });
});
