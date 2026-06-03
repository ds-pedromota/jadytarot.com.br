const BASE = "https://cms.jiupter.com.br/wp-json/wp/v2";
async function getPosts(params) {
  const { categoryId, page = 1, perPage = 9 } = params ?? {};
  const url = new URL(`${BASE}/posts`);
  url.searchParams.set("_embed", "1");
  url.searchParams.set("per_page", String(perPage));
  url.searchParams.set("page", String(page));
  url.searchParams.set("status", "publish");
  if (categoryId) url.searchParams.set("categories", String(categoryId));
  const res = await fetch(url.toString(), {
    headers: { "Cache-Control": "max-age=3600" }
  });
  if (!res.ok) throw new Error(`WP API error: ${res.status}`);
  const posts = await res.json();
  const total = Number(res.headers.get("X-WP-Total") ?? 0);
  const totalPages = Number(res.headers.get("X-WP-TotalPages") ?? 1);
  return { posts, total, totalPages };
}
async function getPostBySlug(slug) {
  const url = new URL(`${BASE}/posts`);
  url.searchParams.set("_embed", "1");
  url.searchParams.set("slug", slug);
  url.searchParams.set("status", "publish");
  const res = await fetch(url.toString(), {
    headers: { "Cache-Control": "max-age=300" }
  });
  if (!res.ok) return null;
  const posts = await res.json();
  return posts[0] ?? null;
}
async function getCategories() {
  const url = new URL(`${BASE}/categories`);
  url.searchParams.set("per_page", "20");
  url.searchParams.set("hide_empty", "true");
  const res = await fetch(url.toString(), {
    headers: { "Cache-Control": "max-age=3600" }
  });
  if (!res.ok) return [];
  return res.json();
}
function getPostImageUrl(post, size = "large") {
  const media = post._embedded?.["wp:featuredmedia"]?.[0];
  if (!media) return "/images/blog-placeholder.svg";
  return media.media_details?.sizes?.[size]?.source_url ?? media.source_url;
}
function getPostCategories(post) {
  return post._embedded?.["wp:term"]?.[0] ?? [];
}
function getReadingTime(post) {
  const text = post.content.rendered.replace(/<[^>]+>/g, "");
  const words = text.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
}
function formatDate(dateString) {
  return new Intl.DateTimeFormat("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric"
  }).format(new Date(dateString));
}
function stripHtml(html) {
  return html.replace(/<[^>]+>/g, "").replace(/&[^;]+;/g, " ").replace(/\s+/g, " ").trim();
}

export { getPostImageUrl as a, getPostCategories as b, getReadingTime as c, getPosts as d, getCategories as e, formatDate as f, getPostBySlug as g, stripHtml as s };
