/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { getModelForClass } from '@typegoose/typegoose';
import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import Planet from '../models/Planet'

class FilmController {
  async create (req: Request, res: Response) {
    const PlanetModel = getModelForClass(Planet);
    let planetCreated = await PlanetModel.create({ name: req.body.name, climate: req.body.climate, terrain: req.body.terrain });
    return res.status(201).json(planetCreated);
  }
}

export default FilmController
