import express, { Express } from 'express';
import { DeliveryServer } from './setupServer';
import databaseConnnection from './setupDatabase';

class Application {
    public initialize(): void {
        databaseConnnection();
        const app: Express = express();
        const server: DeliveryServer = new DeliveryServer(app);
        server.start();
    }
}

const application: Application = new Application();
application.initialize();