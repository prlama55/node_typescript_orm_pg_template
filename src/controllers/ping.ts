import {Get, Route, Tags} from "tsoa";
// @ts-ignore
import appInfo from "../../package.json";

interface PingResponse {
    version: string;
    message: string;
}

@Route("ping")
@Tags("Ping")
export default class PingController {
    @Get("/")
    public async ping(): Promise<PingResponse> {
        return {
            version: appInfo?.version || "0.0.1",
            message: "Server is up and running",
        };
    }
}