import type { WPPost, WPCategory } from '../types/wordpress'

const BASE =
  import.meta.env.WP_API_URL ??
  'https://cms.jiupter.com.br/wp-json/wp/v2'

export async function getPosts(params?: {
  categoryId?: number
  page?: number
  perPage?: number
}): Promise<{ posts: WPPost[]; total: number; totalPages: number }> {
  const { categoryId, page = 1, perPage = 9 } = params ?? {}

  const url = new URL(`${BASE}/posts`)
  url.searchParams.set('_embed', '1')
  url.searchParams.set('per_page', String(perPage))
  url.searchParams.set('page', String(page))
  url.searchParams.set('status', 'publish')
  if (categoryId) url.searchParams.set('categories', String(categoryId))

  const res = await fetch(url.toString(), {
    headers: { 'Cache-Control': 'max-age=3600' },
  })
  if (!res.ok) throw new Error(`WP API error: ${res.status}`)

  const posts: WPPost[] = await res.json()
  const total = Number(res.headers.get('X-WP-Total') ?? 0)
  const totalPages = Number(res.headers.get('X-WP-TotalPages') ?? 1)

  return { posts, total, totalPages }
}

export async function getCategories(): Promise<WPCategory[]> {
  const url = new URL(`${BASE}/categories`)
  url.searchParams.set('per_page', '20')
  url.searchParams.set('hide_empty', 'true')

  const res = await fetch(url.toString(), {
    headers: { 'Cache-Control': 'max-age=3600' },
  })
  if (!res.ok) return []
  return res.json()
}

export function getPostImageUrl(
  post: WPPost,
  size: 'medium_large' | 'large' | 'full' = 'large'
): string {
  const media = post._embedded?.['wp:featuredmedia']?.[0]
  if (!media) return '/images/blog-placeholder.svg'
  return media.media_details?.sizes?.[size]?.source_url ?? media.source_url
}

export function getPostCategories(
  post: WPPost
): Array<{ id: number; name: string; slug: string }> {
  return post._embedded?.['wp:term']?.[0] ?? []
}

export function getReadingTime(post: WPPost): number {
  const text = post.content.rendered.replace(/<[^>]+>/g, '')
  const words = text.trim().split(/\s+/).length
  return Math.max(1, Math.ceil(words / 200))
}

export function formatDate(dateString: string): string {
  return new Intl.DateTimeFormat('pt-BR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(dateString))
}

export function stripHtml(html: string): string {
  return html
    .replace(/<[^>]+>/g, '')
    .replace(/&[^;]+;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}
