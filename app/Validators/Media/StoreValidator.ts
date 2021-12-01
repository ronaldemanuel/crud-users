import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class StoreValidator {
  constructor(protected ctx: HttpContextContract) {
    return
  }

  public extensions = ['jpg', 'jpeg', 'png', 'svg', 'mp4', 'wav', 'wmv']

  public schema = schema.create({
    file: schema.file({ extnames: this.extensions, size: '100mb' }, [rules.required()]),
  })

  public messages = {
    'file.extnames': `O arquivo não possui os formatos aceitados: (${this.extensions.join(', ')})`,
    'file.size': 'O arquivo deve possuir no máximo 100mb',
    'file.required': 'Envie um arquivo na rota de arquivos',
  }
}
