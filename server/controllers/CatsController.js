import express from "express";
import BaseController from "../utils/BaseController";
import { catsService } from "../services/CatsService";


export class CatsController extends BaseController {
    constructor() {
        super("api/cats");
        this.router
            .get("", this.getAll)
            .get("/:id", this.getById)
            .post("", this.create)
            .put("/:id", this.edit)
            .delete("/:id", this.delete)
    }
    async getAll(req, res, next) {
        try {
            let data = await catsService.find(req.query);
            return res.send(data)
        } catch (error) {
            next(error);
        }
    }
    async getById(req, res, next) {
        try {
            let data = await catsService.findById(req.params.id);
            return res.send(data)
        } catch (error) {
            next(error);
        }
    }
    async create(req, res, next) {
        try {
            let data = await catsService.create(req.body)
            return res.send(data)
        } catch (error) {
            next(error);
        }
    }

    async edit(req, res, next) {
        try {
            req.body.id = req.params.id
            let data = await catsService.edit(req.body)
            return res.send(data)
        } catch (error) {
            next(error);
        }
    }
    async delete(req, res, next) {
        try {
            await catsService.delete(req.params.id)
            return res.send("Deleted")
        } catch (error) {
            next(error);
        }
    }
}
