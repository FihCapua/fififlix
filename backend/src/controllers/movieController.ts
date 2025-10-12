import { Request, Response } from "express";
import { movieService } from "../services/movieService";

export const movieController = {
    async getAll(req: Request, res: Response) {
        const movies = await movieService.getAll();
        res.json(movies);
    },

    async search(req: Request, res: Response) {
        const { title } = req.query;
        const movies = await movieService.searchByTitle(title as string);
        res.json(movies);
    },

    async create(req: Request, res: Response) {
        const data = req.body;
        const movie = await movieService.create(data);
        res.status(201).json(movie);
    },

    async update(req: Request, res: Response) {
        const { id } = req.params;
        const movie = await movieService.update(Number(id), req.body);
        res.json(movie);
    },

    async delete(req: Request, res: Response) {
        const { id } = req.params;
        await movieService.delete(Number(id));
        res.status(204).send();
    }
}