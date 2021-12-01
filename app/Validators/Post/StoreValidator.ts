import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { Visibility } from 'App/Models/Post'

export default class StoreValidator {
  constructor(protected ctx: HttpContextContract) {
    return
  }

  public schema = schema.create({
    userId: schema.number([rules.required()]),
    title: schema.string({}, [rules.required()]),
    content: schema.string({}, [rules.required()]),
    visibility: schema.enum(Object.values(Visibility), [rules.required()]),
  })

  public messages = {
    'userId.required': 'O usuário não existe',
    'title.required': 'O Post precisa ter um título',
    'content.required': 'O Post precisa de um conteúdo',
    'Visibility.required': 'Selecione a visibilidade do post',
  }
}
