import { ConnectionOptions } from "typeorm";
import 'dotenv/config'
import {join} from 'path'

const config: ConnectionOptions = {
    type: "postgres",
    host: process.env.DATABASE_HOST,
    port: Number(process.env.DATABASE_PORT),
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    entities: [join(__dirname, '..','modules/*/*.entity{.ts,.js}')],
    synchronize: true,
};

export default config;