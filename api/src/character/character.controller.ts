/*
* This Controller is used to handle the character related requests
* It will use the use case to handle the business logic and the types to define the structure of the data.
* The controller will be used by the router to handle the requests from the client.
* */

import { CharacterUseCase } from './character.usecase'
import { validateDto } from "../core/validateDto";
import { CharacterDtoImp } from "./character.dto";
import { Response, Request, NextFunction } from "express";


export class CharacterController {

    constructor(private readonly useCase = new CharacterUseCase()) {
    }

    async createCharacter(req: Request, res: Response, next: NextFunction) {
        const dto = await validateDto(CharacterDtoImp, req.body, next)
        if (!dto) return
        const character = await this.useCase.createCharacter(dto)
        return res.status(201).json(character)
    }

    async readCharacter(req: Request, res: Response) {
        const character = await this.useCase.readCharacter(req.params.id)
        if (!character) return res.status(404).send('Character not found')
        return res.status(200).json(character)
    }

    async updateCharacter(req: Request, res: Response, next: NextFunction) {
        const dto = await validateDto(CharacterDtoImp, req.body, next)
        if (!dto) return
        const character = await this.useCase.updateCharacter(req.params.id, dto)
        return res.status(200).json(character)
    }

    async deleteCharacter(req: Request, res: Response) {
        const deleted = await this.useCase.deleteCharacter(req.params.id)
        if (!deleted) return res.status(404).send('Character not found')
        return res.status(200).send('Character deleted')
    }

    async getAllCharacters(_: Request, res: Response) {
        const characters = await this.useCase.getAllCharacters()
        return res.status(200).json(characters)
    }
}