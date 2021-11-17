import { Get, Route, Tags, Post, Body } from "tsoa";
import { User } from "../../shared";
import UserEntity from "./user.entity";
import {IUserCreate} from "../../shared/types/IUser";

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
    public async createUser(@Body() body: IUserCreate): Promise<UserEntity> {
        return await this.userInstance.save(body);
    }
}