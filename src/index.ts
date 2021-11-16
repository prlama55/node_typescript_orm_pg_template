import "reflect-metadata";
import { createConnection } from "typeorm";
import express, { Application } from "express";
import morgan from "morgan";
import dbConfig from "./config/database";
import Router from "./routes";
import swaggerUi from "swagger-ui-express";

const APP_PORT = process.env.APP_PORT || 8080;
const app: Application = express();

app.use(express.json());
app.use(morgan("tiny"));
app.use(express.static("public"));

app.use(
    "/docs",
    swaggerUi.serve,
    swaggerUi.setup(undefined, {
        swaggerOptions: {
            url: "/swagger.json",
        },
    })
);

app.use(Router);

createConnection(dbConfig)
    .then((_connection) => {
        app.listen(APP_PORT, () => {
            console.log("Server is running on port", APP_PORT);
        });
    })
    .catch((err) => {
        console.log("Unable to connect to db", err);
        process.exit(1);
    });
