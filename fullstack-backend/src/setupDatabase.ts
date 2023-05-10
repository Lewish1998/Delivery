import mongoose, { mongo } from 'mongoose';

export default () => {
    const connect = () => {
        mongoose.connect('mongodb://localhost:27017/deliveryapp-backend')
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