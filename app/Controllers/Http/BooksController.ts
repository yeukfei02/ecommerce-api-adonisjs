import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import Book from 'App/Models/Book';

export default class BooksController {
  public async create({ request, response }: HttpContextContract) {
    const requestBody = request.all();
    if (requestBody) {
      const name = requestBody.name;
      const author = requestBody.author;
      const price = requestBody.price;
      const quantity = requestBody.quantity;
      const shopsId = requestBody.shops_id;

      const book = new Book();
      book.name = name;
      book.author = author;
      book.price = price;
      book.quantity = quantity;
      book.shops_id = shopsId;
      await book.save();

      response.status(200).json({
        message: 'createBooks',
      });
    } else {
      response.status(400).json({
        message: 'createBooks error, no request body',
      });
    }
  }

  public async index({ response }: HttpContextContract) {
    const books = await Book.all();

    response.status(200).json({
      message: 'getBooks',
      books: books,
    });
  }

  public async show({ response, params }: HttpContextContract) {
    const id = params.id;

    if (id) {
      const idNum = parseInt(id, 10);

      const book = await Book.find(idNum);

      response.status(200).json({
        message: 'getBookById',
        book: book,
      });
    } else {
      response.status(400).json({
        message: 'getBookById error, no this id',
      });
    }
  }

  public async update({ request, response, params }: HttpContextContract) {
    const id = params.id;

    if (id) {
      const requestBody = request.all();
      if (requestBody) {
        const idNum = parseInt(id, 10);

        const book = await Book.findOrFail(idNum);
        book.name = requestBody.name;
        book.author = requestBody.author;
        book.price = requestBody.price;
        book.quantity = requestBody.quantity;
        book.shops = requestBody.shopsId;
        await book.save();

        response.status(200).json({
          message: 'updateBookById',
        });
      }
    } else {
      response.status(400).json({
        message: 'updateBookById error, no this id',
      });
    }
  }

  public async destroy({ response, params }: HttpContextContract) {
    const id = params.id;

    if (id) {
      const idNum = parseInt(id, 10);

      const book = await Book.findOrFail(idNum);
      await book.delete();

      response.status(200).json({
        message: 'deleteBookById',
      });
    } else {
      response.status(400).json({
        message: 'deleteBookById error, no this id',
      });
    }
  }
}
