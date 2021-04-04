import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class Orders extends BaseSchema {
  protected tableName = 'orders';

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id');
      table.string('order_detail').notNullable();
      table.integer('users_id').notNullable();
      table.integer('shops_id').notNullable();
      table.timestamps(true);
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
