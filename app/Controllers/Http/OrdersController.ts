import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import Order from 'App/Models/Order';

export default class OrdersController {
  public async create({ request, response }: HttpContextContract) {
    const requestBody = request.all();
    if (requestBody) {
      const orderDetail = requestBody.order_detail;
      const usersId = requestBody.users_id;
      const shopsId = requestBody.shops_id;

      const order = new Order();
      order.order_detail = orderDetail;
      order.users_id = usersId;
      order.shops_id = shopsId;
      await order.save();

      response.status(200).json({
        message: 'createOrders',
      });
    } else {
      response.status(400).json({
        message: 'createOrders error, no request body',
      });
    }
  }

  public async index({ request, response }: HttpContextContract) {
    const orders = await Order.all();

    response.status(200).json({
      message: 'getOrders',
      orders: orders,
    });
  }

  public async show({ request, response, params }: HttpContextContract) {
    const id = params.id;

    if (id) {
      const idNum = parseInt(id, 10);

      const order = await Order.find(idNum);

      response.status(200).json({
        message: 'getOrderById',
        order: order,
      });
    } else {
      response.status(400).json({
        message: 'getOrderById error, no this id',
      });
    }
  }
}
