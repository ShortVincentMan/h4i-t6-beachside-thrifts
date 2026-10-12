import mongoose from "mongoose";

// Cache the connection across hot reloads in development
const globalWithMongoose = globalThis as typeof globalThis & {
  mongoose?: { conn: typeof mongoose | null; promise: Promise<typeof mongoose> | null };
};
let cached = globalWithMongoose.mongoose;

if (!cached) {
  cached = globalWithMongoose.mongoose = { conn: null, promise: null };
}

const connectionCache = cached;

async function dbConnect() {
  const mongoUri = process.env.MONGO_URI;
  if (!mongoUri) {
    throw new Error("MONGO_URI must be set before connecting to MongoDB");
  }

  if (connectionCache.conn) {
    return connectionCache.conn;
  }

  if (!connectionCache.promise) {
    const opts = {
      bufferCommands: false,
    };

    connectionCache.promise = mongoose.connect(mongoUri, opts).then((mongoose) => {
      return mongoose;
    });
  }

  try {
    connectionCache.conn = await connectionCache.promise;
  } catch (e) {
    connectionCache.promise = null;
    console.error("Failed to connect to MongoDB Atlas:", e);
    throw e;
  }

  return connectionCache.conn;
}

export default dbConnect;
