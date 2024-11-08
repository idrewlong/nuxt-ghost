import GhostContentAPI from '@tryghost/content-api'


const api = new GhostContentAPI({
        url: process.env.GHOST_URL,
        key: process.env.GHOST_CONTENT_KEY,
        version: 'v5.94.1'
    })

// Handler for getting a single post by slug
export default defineEventHandler(async (event) => {
        const { slug } = getQuery(event);
        
        if (!slug) {
            throw createError({
                statusCode: 400,
                message: 'Post slug is required'
            })
        }
    
        try {
            const post = await api.posts.read({
                slug,
                include: 'tags,authors'
            })
            
            if (!post) {
                throw createError({
                    statusCode: 404,
                    message: 'Post not found'
                })
            }
    
            return post
        } catch (error) {
            console.error('Ghost API Error:', error)
            if (error.statusCode === 404) {
                throw createError({
                    statusCode: 404,
                    message: 'Post not found'
                })
            }
            throw createError({
                statusCode: 500,
                message: 'Failed to fetch post'
            })
        }
    })