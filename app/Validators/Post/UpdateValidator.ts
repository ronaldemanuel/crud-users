import { schema } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { Visibility } from 'App/Models/Post'

export default class UpdateValidator {
  constructor(protected ctx: HttpContextContract) {
    return
  }
  public schema = schema.create({
    userId: schema.number.optional(),
    title: schema.string.optional(),
    content: schema.string.optional(),
    visibility: schema.enum.optional(Object.values(Visibility)),
  })

  public messages = {}
}
