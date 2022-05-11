import "dotenv/config";

import chalk from "chalk";
import restify from "restify";
import mongoose from "mongoose";
import rjwt from "restify-jwt-community";
import routes from "./routes";
import * as logger from "./util/logger";

// Set up REST API server
const server = restify.createServer();
server.use(restify.plugins.bodyParser());
server.use(rjwt({ secret: process.env.JWT_SECRET }).unless({ path: ["/auth"] }));
server.listen(process.env.PORT, async () => {
    const connection = await mongoose.connect(process.env.MONGO_STRING);
    logger.log(`Connected to database "${connection.connections[0].name}"`);
});

// Create connection to MongoDB database via REST API
const db = mongoose.connection;
db.on("error", err => logger.error(err));
db.once("open", () => {
    Object.values(routes).forEach(route => route(server));
    logger.log(`REST API server started on port ${chalk.green(process.env.PORT)}`, "ready");
});
