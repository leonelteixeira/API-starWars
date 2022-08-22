/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { getModelForClass } from '@typegoose/typegoose';
import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import Planet from '../models/Planet'

class PlanetController {
  async create (req: Request, res: Response) {
    const PlanetModel = getModelForClass(Planet);
    let planetCreated = await PlanetModel.create({ name: req.body.name, climate: req.body.climate, terrain: req.body.terrain });
    return res.status(201).json(planetCreated);
  }

  async list (req: Request, res: Response) {
    const PlanetModel = getModelForClass(Planet);
    let listPlanet = await PlanetModel.find();
    return res.status(200).json(listPlanet);
  }

  async findById (req: Request, res: Response) {
    console.log(req.params.id)
    const PlanetModel = getModelForClass(Planet);
    let planet = await PlanetModel.findById(req.params.id);
    return res.status(200).json(planet);
  }

  async deleteOne (req: Request, res: Response) {
    console.log(req.params.id)
    const PlanetModel = getModelForClass(Planet);
    let planet = await PlanetModel.deleteOne({ _id: req.params.id });
    return res.status(204);
  }
}

export default PlanetController
