import mongoose from "mongoose";

// Use environment variable for the connection string
const connectionString =
  "mongodb+srv://production_spiderMonkey:ZldLi0VKCrJZFMdO@ppn.hfq7y.mongodb.net/ppn?retryWrites=true&w=majority"; // process.env.CONNECTION_STRING;

if (!connectionString) {
  throw new Error(
    "No connection string provided. \n\nPlease create a `.env` file in the root of this project and add a CONNECTION_STRING variable with the MongoDB connection string. \nRefer to the README.md for more information.",
  );
}

console.log({ prd: process.env.NODE_ENV });
let db: typeof mongoose | undefined;

declare global {
  var __db: typeof mongoose | undefined;
}

async function connect() {
  if (db) return db;

  // Enhanced connection options
  const connectionOptions = {
    connectTimeoutMS: 15000, // 15 seconds connection timeout
    serverSelectionTimeoutMS: 15000, // 15 seconds server selection timeout
    socketTimeoutMS: 45000, // 45 seconds socket timeout
  };

  // Register event listeners to track connection status
  mongoose.connection.on("connected", () => {
    console.log(`Database connected at ${mongoose.connection.host}`);
  });

  mongoose.connection.on("error", (err) => {
    console.error("Database connection error:", err);
  });

  mongoose.connection.on("disconnected", () => {
    console.warn("Database disconnected.");
  });

  // Connect to the database
  if (process.env.NODE_ENV === "production") {
    db = await mongoose.connect(connectionString, connectionOptions);
    // console.log(db);
  } else {
    if (!global.__db) {
      global.__db = await mongoose.connect(connectionString, connectionOptions);
    }
    db = global.__db;
  }

  return db;
}

export { mongoose, connect };
