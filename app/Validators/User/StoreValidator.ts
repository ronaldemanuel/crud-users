import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class StoreValidator {
  constructor(protected ctx: HttpContextContract) {
    return
  }

  public schema = schema.create({
    name: schema.string({}, [rules.required()]),
    username: schema.string({}, [rules.required(), rules.maxLength(100)]),
    email: schema.string({}, [
      rules.required(),
      rules.email(),
      rules.unique({ table: 'users', column: 'email' }),
    ]),
    password: schema.string({}, [rules.required(), rules.minLength(6)]),
  })

  public messages = {
    'name.required': 'O campo nome não pode estar vazio',
    'username.required': 'O campo username não pode estar vazio',
    'username.maxLength': 'O username deve ter no máximo 100 caracteres',
    'email.required': 'O campo email não pode estar vazio',
    'email.email': 'O email deve ser válido',
    'email.unique': 'O email já existe',
    'password.required': 'O campo senha não pode estar vazio',
    'password.minLength': 'A senha deve ter no mínimo 6 caracteres',
  }
}
