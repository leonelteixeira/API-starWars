/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { getModelForClass } from '@typegoose/typegoose';
import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import Planet from '../models/Planet'
import axios from 'axios';

class PlanetController {
  async create (req: Request, res: Response) {
    const PlanetModel = getModelForClass(Planet);
    const planetExists = await PlanetModel.findOne({name: req.body.name})
    if (planetExists) {
      console.log(`Planet ${req.body.name} already exist`)
      return res.status(400).json({message: `Planet ${req.body.name} already exist`})
    }
    const response = await axios.get(`http://swapi.dev/api/planets?search=${req.body.name}`)
    const moviesAppearence = response.data.results[0].films.length
    let planetCreated = await PlanetModel.create({ name: req.body.name, climate: req.body.climate, terrain: req.body.terrain, moviesAppearence: moviesAppearence });
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
    await PlanetModel.deleteOne({ _id: req.params.id });
    return res.status(204).send();
  }

  async updateOne (req: Request, res: Response) {
    console.log(req.params.id)
    const PlanetModel = getModelForClass(Planet);
    let planetUpdate = await PlanetModel.findOneAndUpdate({ _id: req.params.id }, { name: req.body.name, climate: req.body.climate, terrain: req.body.terrain }, {returnDocument: 'after'});
    return res.status(200).json(planetUpdate);
  }


}

export default PlanetController
