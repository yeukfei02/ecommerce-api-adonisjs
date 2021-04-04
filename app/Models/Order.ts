import { DateTime } from 'luxon';
import { BaseModel, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm';
import User from './User';
import Shop from './Shop';

export default class Order extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public order_detail: string;

  @column()
  public users_id: number;

  @column()
  public shops_id: number;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;
}
