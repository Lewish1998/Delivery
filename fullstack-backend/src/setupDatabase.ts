import mongoose, { mongo } from 'mongoose';
import { config } from './config';

export default () => {
    const connect = () => {
        mongoose.connect(`${config.DATABASE_URL}`)
            .then(() => {
              console.log("Succesfully connected to database.");
            })
            .catch((error) => {
              console.log("error connecting to database", error);
              return process.exit(1);
            })
    };
    connect();

    mongoose.connection.on('disconnected', connect);
};