/*
 * This router defines the routes for the character entity
 * */
import { Router } from 'express'

import { CharacterController } from './character.controller'

export const characterRouter = Router()

const controller = new CharacterController()

characterRouter.post('/', controller.createCharacter.bind(controller))

characterRouter.get('/:id', controller.readCharacter.bind(controller))

characterRouter.put('/:id', controller.updateCharacter.bind(controller))

characterRouter.delete('/:id', controller.deleteCharacter.bind(controller))

characterRouter.get('/', controller.getAllCharacters.bind(controller))
