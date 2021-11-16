import {EntityTarget, getRepository} from "typeorm";
class Model<T>{
    repository
    constructor(entity: EntityTarget<T>) {
        this.repository = getRepository(entity);
    }

    public async findAll(){
        return this.repository.find();
    }

    public async save(payload: T){
        return this.repository.save({
            ...payload,
        });
    }

    public async findOne(id: number){
        const instance = await this.repository.findOne(id);
        if (!instance) return null;
        return instance;
    }
}
export default Model