import mongoose from 'mongoose';

const DB_CONNECTION_STRING = "mongodb+srv://avinitjsr15:sUO7kDF9WrBL5ERM@cluster0.sbq8n.mongodb.net/FlixTime?authSource=admin";

const connectDB = async () => {
    //console.log("mongo-conn-string", process.env.DB_CONNECTION_STRING)
    if (!DB_CONNECTION_STRING) {
        console.error('DB_CONNECTION_STRING is undefined or missing!');
        return;
    }
    await mongoose.connect(DB_CONNECTION_STRING, {
        connectTimeoutMS: 30000, // Adjust timeout if necessary
        serverSelectionTimeoutMS: 30000 // Timeout for server selection
      });
}

export default connectDB;