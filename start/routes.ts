/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes/index.ts` as follows
|
| import './cart'
| import './customer'
|
*/

import Route from '@ioc:Adonis/Core/Route';

Route.get('/', 'MainsController.index');

Route.group(() => {
  Route.post('/users/signup', 'UsersController.signup');
  Route.post('/users/login', 'UsersController.login');
  Route.get('/users', 'UsersController.index');
  Route.get('/users/:id', 'UsersController.show');
  Route.put('/users/change-password/:id', 'UsersController.changePassword');

  Route.post('/shops', 'ShopsController.create');
  Route.get('/shops', 'ShopsController.index');
  Route.get('/shops/:id', 'ShopsController.show');
  Route.put('/shops/:id', 'ShopsController.update');
  Route.delete('/shops/:id', 'ShopsController.destroy');

  Route.post('/books', 'BooksController.create');
  Route.get('/books', 'BooksController.index');
  Route.get('/books/:id', 'BooksController.show');
  Route.put('/books/:id', 'BooksController.update');
  Route.delete('/books/:id', 'BooksController.destroy');

  Route.post('/orders', 'OrdersController.create');
  Route.get('/orders', 'OrdersController.index');
  Route.get('/orders/:id', 'OrdersController.show');
}).prefix('/api');
