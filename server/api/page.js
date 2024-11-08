import GhostContentAPI from '@tryghost/content-api'

const api = new GhostContentAPI({
        url: process.env.GHOST_URL,
        key: process.env.GHOST_CONTENT_KEY,
        version: 'v5.94.1'
    })

    
    // Handler for getting a single page by slug
    export default defineEventHandler(async (event) => {
        const { slug } = getQuery(event);
    
        if (!slug) {
            throw createError({
                statusCode: 400,
                message: 'Page slug is required'
            })
        }
    
        try {
            const page = await api.pages.read({
                slug,
                include: 'tags,authors'
            })
            
            if (!page) {
                throw createError({
                    statusCode: 404,
                    message: 'Page not found'
                })
            }
    
            return page
        } catch (error) {
            console.error('Ghost API Error:', error)
            if (error.statusCode === 404) {
                throw createError({
                    statusCode: 404,
                    message: 'Page not found'
                })
            }
            throw createError({
                statusCode: 500,
                message: 'Failed to fetch page'
            })
        }
    })