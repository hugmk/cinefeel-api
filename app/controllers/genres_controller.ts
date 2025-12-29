import type { HttpContext } from '@adonisjs/core/http'
import Genre from '#models/genre'

export default class GenresController {
  async index({ response }: HttpContext) {
    const genres = await Genre.query().orderBy('name', 'asc').select('id', 'tmdbId', 'name')

    return response.ok(genres)
  }
}
