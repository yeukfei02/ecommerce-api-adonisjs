import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class Books extends BaseSchema {
  protected tableName = 'books';

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id');
      table.string('name').notNullable();
      table.string('author').notNullable();
      table.float('price').notNullable();
      table.integer('quantity').notNullable();
      table.integer('shops_id').notNullable();
      table.timestamps(true);
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
