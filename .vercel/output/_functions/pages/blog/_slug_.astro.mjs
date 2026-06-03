import { e as createAstro, f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, u as unescapeHTML } from '../../chunks/astro/server_CaiWAfgU.mjs';
import 'piccolore';
import { $ as $$Header, a as $$Footer, b as $$Layout } from '../../chunks/Footer_No-LMxbW.mjs';
import { g as getPostBySlug, a as getPostImageUrl, b as getPostCategories, c as getReadingTime, f as formatDate } from '../../chunks/wordpress_r0zkWf-w.mjs';
/* empty css                                     */
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://jadytarot.com.br");
const prerender = false;
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const post = await getPostBySlug(slug).catch(() => null);
  if (!post) {
    return Astro2.redirect("/blog/");
  }
  const imageUrl = getPostImageUrl(post, "large");
  const imageAlt = post._embedded?.["wp:featuredmedia"]?.[0]?.alt_text || post.title.rendered;
  const categories = getPostCategories(post);
  const readingTime = getReadingTime(post);
  const date = formatDate(post.date);
  const title = post.title.rendered;
  const seoTitle = post.yoast_head_json?.title ?? `${title} \xB7 Jady Mota`;
  const seoDesc = post.yoast_head_json?.description ?? "";
  const ogImage = post.yoast_head_json?.og_image?.[0]?.url ?? imageUrl;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": seoTitle, "description": seoDesc, "ogImage": ogImage, "data-astro-cid-4sn4zg3r": true }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "data-astro-cid-4sn4zg3r": true })} ${maybeRenderHead()}<main class="post-main" data-astro-cid-4sn4zg3r> <!-- Hero do post --> <div class="post-hero" data-astro-cid-4sn4zg3r> <img${addAttribute(imageUrl, "src")}${addAttribute(imageAlt, "alt")} class="post-hero__image" loading="eager" decoding="async" data-astro-cid-4sn4zg3r> <div class="post-hero__overlay" data-astro-cid-4sn4zg3r></div> <div class="post-hero__content container" data-astro-cid-4sn4zg3r> <div class="post-hero__meta" data-astro-cid-4sn4zg3r> ${categories.map((cat) => renderTemplate`<a${addAttribute(`/blog/`, "href")} class="post-hero__cat" data-astro-cid-4sn4zg3r>${cat.name}</a>`)} </div> <h1 class="post-hero__title" data-astro-cid-4sn4zg3r>${unescapeHTML(title)}</h1> <p class="post-hero__info" data-astro-cid-4sn4zg3r> ${date}&ensp;·&ensp;${readingTime} min de leitura
</p> </div> </div> <!-- Conteúdo --> <div class="post-content container" data-astro-cid-4sn4zg3r> <div class="post-body" data-astro-cid-4sn4zg3r>${unescapeHTML(post.content.rendered)}</div> <!-- Rodapé do post --> <footer class="post-footer" data-astro-cid-4sn4zg3r> <div class="post-footer__divider" data-astro-cid-4sn4zg3r></div> <a href="/blog/" class="post-footer__back" data-astro-cid-4sn4zg3r>← Voltar aos artigos</a> </footer> </div> </main> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-4sn4zg3r": true })} ` })} `;
}, "C:/Users/Dell/Documents/projetos/jadytarot.com.br/src/pages/blog/[slug].astro", void 0);

const $$file = "C:/Users/Dell/Documents/projetos/jadytarot.com.br/src/pages/blog/[slug].astro";
const $$url = "/blog/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
