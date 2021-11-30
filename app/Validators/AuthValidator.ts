import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AuthValidator {
  constructor(protected ctx: HttpContextContract) {
    return
  }

  public schema = schema.create({
    email: schema.string({}, [rules.required(), rules.email()]),
    password: schema.string({}, [rules.required(), rules.minLength(6)]),
  })

  public messages = {
    'email.required': 'O email é obrigatório',
    'email.email': 'O email precisa ser válido',
    'password.required': 'A senha é obrigatória',
    'password.minLength': 'A senha deve ter no mínimo 6 caracteres',
  }
}
