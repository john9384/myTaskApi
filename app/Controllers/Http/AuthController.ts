import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AuthController {
  public async getUser({}: HttpContextContract) {
    return { user: 'User route working' }
  }
}
