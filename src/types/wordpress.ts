export interface WPPost {
  id: number
  slug: string
  title: { rendered: string }
  excerpt: { rendered: string }
  content: { rendered: string }
  date: string
  modified: string
  featured_media: number
  categories: number[]
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string
      alt_text: string
      media_details: {
        sizes: {
          medium_large?: { source_url: string }
          large?: { source_url: string }
          full: { source_url: string }
        }
      }
    }>
    'wp:term'?: Array<Array<{
      id: number
      name: string
      slug: string
    }>>
  }
  yoast_head_json?: {
    title?: string
    description?: string
    og_image?: Array<{ url: string }>
  }
}

export interface WPCategory {
  id: number
  name: string
  slug: string
  count: number
}
