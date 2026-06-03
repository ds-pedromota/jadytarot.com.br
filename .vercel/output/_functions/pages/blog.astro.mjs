import { e as createAstro, f as createComponent, m as maybeRenderHead, h as addAttribute, r as renderTemplate, u as unescapeHTML, k as renderComponent, l as renderScript, n as Fragment } from '../chunks/astro/server_CaiWAfgU.mjs';
import 'piccolore';
import { b as $$Layout, $ as $$Header, a as $$Footer } from '../chunks/Footer_BLFQ941f.mjs';
import { a as getPostImageUrl, b as getPostCategories, c as getReadingTime, f as formatDate, s as stripHtml, d as getPosts, e as getCategories } from '../chunks/wordpress_r0zkWf-w.mjs';
import 'clsx';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro$2 = createAstro("https://jadytarot.com.br");
const $$PostCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$PostCard;
  const { post, featured = false } = Astro2.props;
  const imageUrl = getPostImageUrl(post, featured ? "large" : "medium_large");
  const imageAlt = post._embedded?.["wp:featuredmedia"]?.[0]?.alt_text || post.title.rendered;
  const categories = getPostCategories(post);
  const firstCategory = categories[0];
  const readingTime = getReadingTime(post);
  const date = formatDate(post.date);
  const rawExcerpt = stripHtml(post.excerpt.rendered);
  const excerpt = rawExcerpt.length > (featured ? 200 : 120) ? rawExcerpt.slice(0, featured ? 200 : 120) + "\u2026" : rawExcerpt;
  const title = post.title.rendered;
  return renderTemplate`${maybeRenderHead()}<article${addAttribute(`post-card${featured ? " post-card--featured" : ""}`, "class")} data-astro-cid-73h5nvzy> <a${addAttribute(`/blog/${post.slug}/`, "href")} class="post-card__image-wrap" tabindex="-1" aria-hidden="true" data-astro-cid-73h5nvzy> <img${addAttribute(imageUrl, "src")}${addAttribute(imageAlt, "alt")} class="post-card__image" loading="lazy" decoding="async" data-astro-cid-73h5nvzy> <div class="post-card__image-overlay" data-astro-cid-73h5nvzy></div> ${firstCategory && renderTemplate`<span class="post-card__category" data-astro-cid-73h5nvzy>${firstCategory.name}</span>`} </a> <div class="post-card__body" data-astro-cid-73h5nvzy> <a${addAttribute(`/blog/${post.slug}/`, "href")} class="post-card__title-link" data-astro-cid-73h5nvzy> <h2 class="post-card__title" data-astro-cid-73h5nvzy>${unescapeHTML(title)}</h2> </a> <p class="post-card__excerpt" data-astro-cid-73h5nvzy>${excerpt}</p> <footer class="post-card__footer" data-astro-cid-73h5nvzy> <span class="post-card__meta" data-astro-cid-73h5nvzy> ${date}&ensp;·&ensp;${readingTime} min de leitura
</span> <a${addAttribute(`/blog/${post.slug}/`, "href")} class="post-card__read"${addAttribute(`Ler: ${title}`, "aria-label")} data-astro-cid-73h5nvzy>
Ler →
</a> </footer> </div> </article> `;
}, "C:/Users/Dell/Documents/projetos/jadytarot.com.br/src/components/blog/PostCard.astro", void 0);

const $$Astro$1 = createAstro("https://jadytarot.com.br");
const $$PostGrid = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PostGrid;
  const { posts, showFeatured = false } = Astro2.props;
  return renderTemplate`${posts.length === 0 ? renderTemplate`${maybeRenderHead()}<div class="empty-state" role="status" data-astro-cid-wbkd6kr5><svg class="empty-state__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" data-astro-cid-wbkd6kr5><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9z" data-astro-cid-wbkd6kr5></path></svg><p class="empty-state__text" data-astro-cid-wbkd6kr5>Nenhum artigo encontrado nesta categoria.</p><a href="/blog/" class="empty-state__link" data-astro-cid-wbkd6kr5>← Ver todos os artigos</a></div>` : renderTemplate`<div class="post-grid" id="post-grid" data-astro-cid-wbkd6kr5>${posts.map((post, i) => {
    const featured = showFeatured && i === 0;
    const categorySlugs = getPostCategories(post).map((c) => c.slug).join(" ");
    return renderTemplate`<div${addAttribute(`post-grid__item${featured ? " post-grid__item--featured" : ""}`, "class")}${addAttribute(categorySlugs, "data-categories")}${addAttribute(String(i), "data-index")} data-astro-cid-wbkd6kr5>${renderComponent($$result, "PostCard", $$PostCard, { "post": post, "featured": featured, "data-astro-cid-wbkd6kr5": true })}</div>`;
  })}</div>`}`;
}, "C:/Users/Dell/Documents/projetos/jadytarot.com.br/src/components/blog/PostGrid.astro", void 0);

const $$Astro = createAstro("https://jadytarot.com.br");
const $$CategoryFilter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CategoryFilter;
  const { categories } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="category-filter" role="group" aria-label="Filtrar por categoria" data-astro-cid-qannfrx3> <button class="pill active" data-category="" aria-pressed="true" data-astro-cid-qannfrx3>
Todos
</button> ${categories.map((cat) => renderTemplate`<button class="pill"${addAttribute(cat.slug, "data-category")} aria-pressed="false" data-astro-cid-qannfrx3> ${cat.name} </button>`)} </div> `;
}, "C:/Users/Dell/Documents/projetos/jadytarot.com.br/src/components/blog/CategoryFilter.astro", void 0);

const prerender = false;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  let posts = [];
  let categories = [];
  let fetchError = false;
  try {
    const [postsResult, catsResult] = await Promise.all([
      getPosts({ perPage: 50 }),
      getCategories()
    ]);
    posts = postsResult.posts;
    categories = catsResult;
  } catch (e) {
    fetchError = true;
    console.error("[Blog] WP API offline:", e);
  }
  const PER_PAGE = 9;
  const totalPages = Math.ceil(posts.length / PER_PAGE);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Blog \xB7 Jady Mota \xB7 Tar\xF4 Terap\xEAutico", "description": "Reflex\xF5es sobre tar\xF4, autoconhecimento e psicologia anal\xEDtica. Artigos por Jady Mota.", "ogImage": "/images/og-fosforo.jpg", "data-astro-cid-5tznm7mj": true }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "data-astro-cid-5tznm7mj": true })} ${maybeRenderHead()}<main class="blog-main" data-astro-cid-5tznm7mj> <!-- Hero --> <section class="blog-hero" data-astro-cid-5tznm7mj> <div class="container" data-astro-cid-5tznm7mj> <span class="eyebrow" data-astro-cid-5tznm7mj>REFLEXÕES</span> <h1 class="blog-hero__title" data-astro-cid-5tznm7mj>Artigos</h1> <p class="blog-hero__subtitle" data-astro-cid-5tznm7mj>
Tarô, psicologia e o que as cartas revelam sobre quem somos.
</p> </div> </section> <div class="blog-ornament" data-astro-cid-5tznm7mj></div> <section class="blog-content" data-astro-cid-5tznm7mj> <div class="container" data-astro-cid-5tznm7mj> ${fetchError ? renderTemplate`<div class="blog-error" role="alert" data-astro-cid-5tznm7mj> <p data-astro-cid-5tznm7mj>Não foi possível carregar os artigos agora. Tente novamente em instantes.</p> </div>` : renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "data-astro-cid-5tznm7mj": true }, { "default": async ($$result3) => renderTemplate`${categories.length > 0 && renderTemplate`${renderComponent($$result3, "CategoryFilter", $$CategoryFilter, { "categories": categories, "data-astro-cid-5tznm7mj": true })}`}${renderComponent($$result3, "PostGrid", $$PostGrid, { "posts": posts, "showFeatured": true, "data-astro-cid-5tznm7mj": true })} ${totalPages > 1 && renderTemplate`<nav class="pagination" id="pagination" aria-label="Navegação entre páginas" data-astro-cid-5tznm7mj> <!-- Preenchido pelo script abaixo --> </nav>`}` })}`} </div> </section> </main> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-5tznm7mj": true })} ` })} ${renderScript($$result, "C:/Users/Dell/Documents/projetos/jadytarot.com.br/src/pages/blog/index.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/Users/Dell/Documents/projetos/jadytarot.com.br/src/pages/blog/index.astro", void 0);

const $$file = "C:/Users/Dell/Documents/projetos/jadytarot.com.br/src/pages/blog/index.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
