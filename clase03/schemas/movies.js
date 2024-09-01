const z = require('zod')

const movieSchema = z.object({
	title: z.string({
		invalid_type_error: 'Movie title mest be a string',
		required_error: 'Movie ttitle is required'
	}),
	year: z.number().int().min(1900).max(2024),
	director: z.string(),
	duration: z.number().int().positive(),
	rate: z.number().min(0).max(10).default(5),
	poster: z.string().url({
		message: 'Poster must be a valid URL'
	}),
	genre: z.array(
		z.enum(['Action', 'Adventure', 'Comedy', 'Drama', 'Fantasy', 'Horror', 'Thriller', 'Sci-Fi', 'Romance', 'Crime']),{
			invalid_type_error: 'Movie genre muste be an array of enun Genre',
			required_error: 'Movie genre is required'
		})
})

function validateMovie (input) {
	return movieSchema.safeParse(input)
}

function validatePartialMovie (input) {
	return movieSchema.partial().safeParse(input)
}

module.exports = {
	validateMovie,
	validatePartialMovie
}