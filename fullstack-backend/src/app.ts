import express, { Express } from 'express';
import { DeliveryServer } from './setupServer';
import databaseConnnection from './setupDatabase';
import { config } from './config';

class Application {
	public initialize(): void {
		this.loadConfig();
		databaseConnnection();
		const app: Express = express();
		const server: DeliveryServer = new DeliveryServer(app);
		server.start();
	}

	private loadConfig(): void {
		config.validateConfig();
	}
}

const application: Application = new Application();
application.initialize();
