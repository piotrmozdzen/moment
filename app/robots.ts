import { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/site-config'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/privacy-policy',
        },
        sitemap: `${siteConfig.url}/sitemap.xml`,
    }
}
