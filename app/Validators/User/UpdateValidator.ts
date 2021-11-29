import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UpdateValidator {
  constructor(protected ctx: HttpContextContract) {
    return
  }

  public schema = schema.create({
    name: schema.string.optional({}, []),
    email: schema.string.optional({}, [
      rules.email(),
      rules.unique({ table: 'users', column: 'email' }),
    ]),
    password: schema.string.optional({}, [rules.minLength(6)]),
  })
  public messages = {
    'email.email': 'O email precisa ser válido',
    'email.unique': 'Este endereço de email já existe',
    'password.minLength': 'A senha precisa ter no minimo 6 caracteres',
  }
}
