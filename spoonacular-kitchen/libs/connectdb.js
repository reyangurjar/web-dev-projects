// import mongoose from 'mongoose';

// let connection;

// export  default async function connectToDatabase() {
//   if (connection) {
//     // If there is an existing connection, return it
//     return connection;
//   }

//   try {
//     // Create a new connection using Mongoose

//     connection = await mongoose.connect(process.env.MONGO_URI);
//     // console.log(process.env.MONGO_URI)
//     // Return the new connection
//     return connection;
//   } catch (error) {
//     console.error('Error connecting to the database:', error);
//     throw error;
//   }
// }



import mongoose from "mongoose"
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

export default async function dbConnect() {
  if (cached.conn) {
    console.log("connected to previous mongodb session")
    return cached.conn;
  }
  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
        dbName: "Database",
   
    };
    cached.promise = mongoose.connect(process.env.MONGO_URI, opts).then((mongoose) => {
      console.log("connected to new mongodb session")
      return mongoose;
    });
  }
  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return cached.conn;
}
