import express, { Express } from 'express';
import { DeliveryServer } from '@root/setupServer';
import databaseConnnection from '@root/setupDatabase';
import { config } from '@root/config';

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
