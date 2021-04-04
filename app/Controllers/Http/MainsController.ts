import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';

export default class MainsController {
  public async index({ request, response }: HttpContextContract) {
    response.status(200).json({
      message: 'ecommerce-api-adonisjs',
    });
  }
}
