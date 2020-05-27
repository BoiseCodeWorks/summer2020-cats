import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class CatsService {
    async find(query = {}) {
        return await dbContext.Cats.find(query);
    }
    async findById(id) {
        let data = await dbContext.Cats.findById(id)
        if (!data) {
            throw new BadRequest("invalid id")
        }
        return data
    }
    async create(rawData) {
        return await dbContext.Cats.create(rawData)
    }
    async edit(update) {
        let data = await dbContext.Cats.findByIdAndUpdate(update.id, update, { new: true })
        if (!data) {
            throw new BadRequest("Invalid Id")
        }
        return data
    }
    async delete(id) {
        let data = await dbContext.Cats.findByIdAndDelete(id)
        if (!data) {
            throw new BadRequest("Invalid Id")
        }
        return data
    }

}

export const catsService = new CatsService();