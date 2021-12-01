import { DateTime } from 'luxon'
import {
  BaseModel,
  BelongsTo,
  belongsTo,
  column,
  ManyToMany,
  manyToMany,
} from '@ioc:Adonis/Lucid/Orm'
import User from './User'
import Media from './Media'

export enum Visibility {
  PUBLIC = 'public',
  PRIVATE = 'private',
  NOT_LISTED = 'not_listed',
}

export default class Post extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public userId: number

  @belongsTo(() => User)
  public user: BelongsTo<typeof User>

  @column()
  public title: string

  @column()
  public content: string

  @column()
  public visibility: Visibility

  @manyToMany(() => Media, { pivotTable: 'posts_medias' })
  public media: ManyToMany<typeof Media>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
