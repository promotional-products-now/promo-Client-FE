import mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();

const connectionString = process.env.CONNECTION_STRING || "";

if (!connectionString) {
  throw new Error(
    "No connection string provided. \n\nPlease create a `.env` file in the root of this project and add a CONNECTION_STRING variable with the MongoDB connection string. \nRefer to the README.md for more information.",
  );
}

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

  if (process.env.NODE_ENV === "production") {
    db = await mongoose.connect(connectionString, connectionOptions);
  } else {
    if (!global.__db) {
      global.__db = await mongoose.connect(connectionString, connectionOptions);
    }
    db = global.__db;
  }

  return db;
}

async function ensureDbConnection() {
  if (!db) {
    await connect();
  }
}

export { mongoose, connect, ensureDbConnection };

//
// if (connectionString.indexOf("appName") === -1)
//   connectionString +=
//     connectionString.indexOf("?") > -1
//       ? "&appName=devrel.template.remix|"
//       : "?appName=devrel.template.remix|";
// else
//   connectionString = connectionString.replace(
//     /appName\=([a-z0-9]*)/i,
//     (m, p) => `appName=devrel.template.remix|${p}`,
//   );

// let mongodb: MongoClient;

// declare global {
//   var __db: MongoClient | undefined;
// }

// if (process.env.NODE_ENV === "production") {
//   mongodb = new MongoClient(connectionString);
// } else {
//   if (!global.__db) {
//     global.__db = new MongoClient(connectionString);
//   }
//   mongodb = global.__db;
// }

// let ObjectId = BSON.ObjectId;

// export { mongodb, ObjectId };
