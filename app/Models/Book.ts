import { DateTime } from 'luxon';
import { BaseModel, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm';
import Shop from './Shop';

export default class Book extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public name: string;

  @column()
  public author: string;

  @column()
  public price: number;

  @column()
  public quantity: number;

  @column()
  public shops_id: number;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;
}
