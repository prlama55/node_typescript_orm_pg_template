import { Get, Route, Tags, Post, Body, Path } from "tsoa";
import { User } from "../../models";
import UserEntity from "./user.entity";

@Route("users")
@Tags("User")
export default class UserController {
    private userInstance
    constructor() {
        this.userInstance = new User(UserEntity);
    }
    @Get("/")
    public async getUsers() {
        return await this.userInstance.findAll();
    }

    @Post("/")
    public async createUser(@Body() body: any): Promise<UserEntity> {
        return await this.userInstance.save(body);
    }
}