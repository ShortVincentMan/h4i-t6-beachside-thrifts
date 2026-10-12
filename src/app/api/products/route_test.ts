import { describe, it, expect, vi, beforeEach } from 'vitest';
import { GET, POST } from './route';
import Product from '@/database/productSchema';

// 1. Mock the database connection module to prevent real connections
vi.mock('@/database/db', () => ({
  default: vi.fn().mockResolvedValue(true),
}));

// 2. Mock the Mongoose Product model methods
vi.mock('@/database/productSchema', () => ({
  default: {
    find: vi.fn(),
    create: vi.fn(),
  },
}));

describe('Products API Route (#38)', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('GET returns products with status 200', async () => {
    const mockProducts = [{ name: 'Apple', price: 2 }];
    // Tell the mock find function to return our sample products
    vi.mocked(Product.find).mockResolvedValueOnce(mockProducts);

    const response = await GET();
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data).toEqual(mockProducts);
  });

  it('Valid POST requests create products with status 201', async () => {
    const newProduct = { name: 'Banana', price: 1 };
    vi.mocked(Product.create).mockResolvedValueOnce(newProduct as any);

    // Create a mock Next.js Request with a JSON body
    const request = new Request('http://localhost/api/products', {
      method: 'POST',
      body: JSON.stringify(newProduct),
      headers: { 'Content-Type': 'application/json' },
    });

    const response = await POST(request);
    const data = await response.json();

    expect(response.status).toBe(201);
    expect(Product.create).toHaveBeenCalledWith(
      expect.objectContaining(newProduct)
    );
  });

  it('Invalid input (negative price) returns status 400 and never calls Product.create', async () => {
    const invalidProduct = { name: 'Bad Item', price: -5 };

    const request = new Request('http://localhost/api/products', {
      method: 'POST',
      body: JSON.stringify(invalidProduct),
      headers: { 'Content-Type': 'application/json' },
    });

    const response = await POST(request);

    expect(response.status).toBe(400);
    expect(Product.create).not.toHaveBeenCalled();
  });
});