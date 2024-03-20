/*
 * This router defines the routes for the character entity
 * */
import { Router } from 'express'

import { CharacterController } from './character.controller'

export const characterRouter = Router()

const controller = new CharacterController()

characterRouter.post(
  '/',
  /**
   * #swagger.tags = ['Character']
   * #swagger.description = 'Create a new character'
   */
  controller.createCharacter.bind(controller)
)

characterRouter.get(
  '/:id',
  /**
   * #swagger.tags = ['Character']
   * #swagger.description = 'Get a character by id'
   */
  controller.readCharacter.bind(controller)
)

characterRouter.put(
  '/:id',
  /**
   * #swagger.tags = ['Character']
   * #swagger.description = 'Update a character by id'
   */
  controller.updateCharacter.bind(controller)
)

characterRouter.delete(
  '/:id',
  /**
   * #swagger.tags = ['Character']
   * #swagger.description = 'Delete a character by id'
   */
  controller.deleteCharacter.bind(controller)
)

characterRouter.get(
  '/',
  /**
   * #swagger.tags = ['Character']
   * #swagger.description = 'Get all characters'
   */
  controller.getAllCharacters.bind(controller)
)
