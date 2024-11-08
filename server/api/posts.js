import GhostContentAPI from '@tryghost/content-api'

const api = new GhostContentAPI({
    url: process.env.GHOST_URL,
    key: process.env.GHOST_CONTENT_KEY,
    version: 'v5.94.1'
})

export default defineEventHandler(async (event) => {
    try {
        const posts = await api.posts.browse({
            limit: 'all',
            include: 'tags,authors'
        })
        return posts
    } catch (error) {
        console.error('Ghost API Error:', error)
        throw createError({
            statusCode: 500,
            message: 'Failed to fetch posts'
        })
    }
})

