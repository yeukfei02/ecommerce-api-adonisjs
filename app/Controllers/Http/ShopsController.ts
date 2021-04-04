import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import Shop from 'App/Models/Shop';

export default class ShopsController {
  public async create({ request, response }: HttpContextContract) {
    const requestBody = request.all();
    if (requestBody) {
      const name = requestBody.name;
      const address = requestBody.address;

      const shop = new Shop();
      shop.name = name;
      shop.address = address;
      await shop.save();

      response.status(200).json({
        message: 'createShops',
      });
    } else {
      response.status(400).json({
        message: 'createShops error, no request body',
      });
    }
  }

  public async index({ request, response }: HttpContextContract) {
    const shops = await Shop.all();

    response.status(200).json({
      message: 'getShops',
      shops: shops,
    });
  }

  public async show({ response, params }: HttpContextContract) {
    const id = params.id;

    if (id) {
      const idNum = parseInt(id, 10);

      const shop = await Shop.find(idNum);

      response.status(200).json({
        message: 'getShopById',
        shop: shop,
      });
    } else {
      response.status(400).json({
        message: 'getShopById error, no this id',
      });
    }
  }

  public async update({ request, response, params }: HttpContextContract) {
    const id = params.id;

    if (id) {
      const requestBody = request.all();
      if (requestBody) {
        const idNum = parseInt(id, 10);

        const shop = await Shop.findOrFail(idNum);
        shop.name = requestBody.name;
        shop.address = requestBody.address;
        await shop.save();

        response.status(200).json({
          message: 'updateShopById',
        });
      }
    } else {
      response.status(400).json({
        message: 'updateShopById error, no this id',
      });
    }
  }

  public async destroy({ response, params }: HttpContextContract) {
    const id = params.id;

    if (id) {
      const idNum = parseInt(id, 10);

      const shop = await Shop.findOrFail(idNum);
      await shop.delete();

      response.status(200).json({
        message: 'deleteShopById',
      });
    } else {
      response.status(400).json({
        message: 'deleteShopById error, no this id',
      });
    }
  }
}
