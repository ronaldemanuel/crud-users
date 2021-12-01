import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Post from 'App/Models/Post'
import StoreValidator from 'App/Validators/Post/StoreValidator'
import UpdateValidator from 'App/Validators/Post/UpdateValidator'

export default class PostsController {
  // eslint-disable-next-line prettier/prettier
  public async index({ request }: HttpContextContract) {
    const { limit, offset = 1 } = request.qs()
    const posts = limit ? await Post.query().paginate(offset, limit) : await Post.query()
    return posts
  }

  public async store({ request }: HttpContextContract) {
    const data = await request.validate(StoreValidator)
    const post = await Post.create(data)
    return post
  }

  public async show({ params, response }: HttpContextContract) {
    try {
      const post = await Post.findOrFail(params.id)
      return post
    } catch (error) {
      return response.status(404).json({ error: { message: 'post not found' } })
    }
  }

  public async update({ request, response, params }: HttpContextContract) {
    const data = await request.validate(UpdateValidator)
    try {
      const post = await Post.findOrFail(params.id)
      post.merge(data)
      return post
    } catch (error) {
      return response.status(404).json({ error: { message: 'post not found' } })
    }
  }

  public async destroy({ params, response }: HttpContextContract) {
    try {
      const post = await Post.findOrFail(params.id)
      await post.delete()
    } catch (error) {
      return response.status(404).json({ error: { message: 'post not found' } })
    }
  }
}
