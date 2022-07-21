import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class AddIndices extends BaseSchema {
  public async up() {
    this.schema.table('users', (table) => {
      table.index('email', 'index_users_on_email');
      table.index('password', 'index_users_on_password');
      table.index('created_at', 'index_users_on_created_at');
      table.index('updated_at', 'index_users_on_updated_at');
    });

    this.schema.table('shops', (table) => {
      table.index('name', 'index_shops_on_name');
      table.index('address', 'index_shops_on_address');
      table.index('created_at', 'index_shops_on_created_at');
      table.index('updated_at', 'index_shops_on_updated_at');
    });

    this.schema.table('books', (table) => {
      table.index('name', 'index_books_on_name');
      table.index('author', 'index_books_on_author');
      table.index('price', 'index_books_on_price');
      table.index('quantity', 'index_books_on_quantity');
      table.index('shops_id', 'index_books_on_shops_id');
      table.index('created_at', 'index_books_on_created_at');
      table.index('updated_at', 'index_books_on_updated_at');
    });

    this.schema.table('orders', (table) => {
      table.index('order_detail', 'index_orders_on_order_detail');
      table.index('users_id', 'index_orders_on_users_id');
      table.index('shops_id', 'index_orders_on_shops_id');
      table.index('created_at', 'index_orders_on_created_at');
      table.index('updated_at', 'index_orders_on_updated_at');
    });
  }

  public async down() {
    this.schema.table('users', (table) => {
      table.dropIndex('email', 'index_users_on_email');
      table.dropIndex('password', 'index_users_on_password');
      table.dropIndex('created_at', 'index_users_on_created_at');
      table.dropIndex('updated_at', 'index_users_on_updated_at');
    });

    this.schema.table('shops', (table) => {
      table.dropIndex('name', 'index_shops_on_name');
      table.dropIndex('address', 'index_shops_on_address');
      table.dropIndex('created_at', 'index_shops_on_created_at');
      table.dropIndex('updated_at', 'index_shops_on_updated_at');
    });

    this.schema.table('books', (table) => {
      table.dropIndex('name', 'index_books_on_name');
      table.dropIndex('author', 'index_books_on_author');
      table.dropIndex('price', 'index_books_on_price');
      table.dropIndex('quantity', 'index_books_on_quantity');
      table.dropIndex('shops_id', 'index_books_on_shops_id');
      table.dropIndex('created_at', 'index_books_on_created_at');
      table.dropIndex('updated_at', 'index_books_on_updated_at');
    });

    this.schema.table('orders', (table) => {
      table.dropIndex('order_detail', 'index_orders_on_order_detail');
      table.dropIndex('users_id', 'index_orders_on_users_id');
      table.dropIndex('shops_id', 'index_orders_on_shops_id');
      table.dropIndex('created_at', 'index_orders_on_created_at');
      table.dropIndex('updated_at', 'index_orders_on_updated_at');
    });
  }
}
