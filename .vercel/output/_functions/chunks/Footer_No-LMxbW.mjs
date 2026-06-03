import { e as createAstro, f as createComponent, r as renderTemplate, l as renderScript, o as renderSlot, p as renderHead, h as addAttribute, m as maybeRenderHead } from './astro/server_CaiWAfgU.mjs';
import 'piccolore';
import 'clsx';
/* empty css                          */

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://jadytarot.com.br");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title = "Jady Mota \xB7 Tarot Terap\xEAutico | Autoconhecimento Online",
    description = "Consultas de Tarot Terap\xEAutico com abordagem psicanal\xEDtica. Para quem est\xE1 pronto para se enxergar de verdade. Atendimento 100% online.",
    ogImage = "/images/og-fosforo.jpg"
  } = Astro2.props;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site);
  return renderTemplate(_a || (_a = __template(['<html lang="pt-BR"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="description"', '><!-- Canonical --><link rel="canonical"', '><!-- Open Graph --><meta property="og:type" content="website"><meta property="og:url"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', '><meta property="og:locale" content="pt_BR"><meta property="og:site_name" content="Jady Mota \xB7 Tarot Terap\xEAutico"><!-- Twitter Card --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"', '><meta name="twitter:description"', '><meta name="twitter:image"', '><!-- Schema.org \u2014 Person + LocalBusiness --><script type="application/ld+json">\n      {\n        "@context": "https://schema.org",\n        "@type": ["Person", "LocalBusiness"],\n        "name": "Jady Mota",\n        "jobTitle": "Praticante de Tarot Terap\xEAutico",\n        "description": "Tarot Terap\xEAutico com abordagem psicanal\xEDtica. Atendimento online.",\n        "url": "https://jadytarot.com.br",\n        "sameAs": ["https://instagram.com/jadytarot"],\n        "serviceArea": "Brasil",\n        "priceRange": "R$250\u2013R$830"\n      }\n    <\/script><!-- Favicon --><link rel="icon" type="image/svg+xml" href="/favicon.svg"><!-- Preconnect Google Fonts --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600&family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Jost:wght@300;400&display=swap"><title>', "</title>", "</head> <body> ", " <!-- Intersection Observer para fade-in animations --> ", " </body> </html>"])), addAttribute(description, "content"), addAttribute(canonicalURL, "href"), addAttribute(canonicalURL, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(ogImage, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(ogImage, "content"), title, renderHead(), renderSlot($$result, $$slots["default"]), renderScript($$result, "C:/Users/Dell/Documents/projetos/jadytarot.com.br/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts"));
}, "C:/Users/Dell/Documents/projetos/jadytarot.com.br/src/layouts/Layout.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="site-header" id="site-header" data-astro-cid-3ef6ksr2> <div class="container header-inner" data-astro-cid-3ef6ksr2> <!-- Logo --> <a href="/" class="logo" aria-label="Jady Mota — início" data-astro-cid-3ef6ksr2> <span class="logo-name" data-astro-cid-3ef6ksr2>JADY MOTA</span> <span class="logo-sub" data-astro-cid-3ef6ksr2>Tarot Terapêutico</span> </a> <!-- Nav desktop --> <nav class="nav-desktop" aria-label="Navegação principal" data-astro-cid-3ef6ksr2> <a href="#sobre" class="nav-link" data-astro-cid-3ef6ksr2>Sobre</a> <a href="#servicos" class="nav-link" data-astro-cid-3ef6ksr2>Serviços</a> <a href="#processo" class="nav-link" data-astro-cid-3ef6ksr2>Como funciona</a> <a href="#faq" class="nav-link" data-astro-cid-3ef6ksr2>FAQ</a> <a href="/blog/" class="nav-link" data-astro-cid-3ef6ksr2>Blog</a> <a href="#servicos" class="nav-cta" aria-label="Agendar consulta" data-astro-cid-3ef6ksr2>Agendar</a> </nav> <!-- Botão menu mobile --> <button class="menu-toggle" aria-label="Abrir menu" aria-expanded="false" aria-controls="mobile-menu" data-astro-cid-3ef6ksr2> <span class="menu-bar" data-astro-cid-3ef6ksr2></span> <span class="menu-bar" data-astro-cid-3ef6ksr2></span> <span class="menu-bar" data-astro-cid-3ef6ksr2></span> </button> </div> <!-- Menu mobile --> <nav class="nav-mobile" id="mobile-menu" aria-hidden="true" data-astro-cid-3ef6ksr2> <a href="#sobre" class="mobile-link" data-astro-cid-3ef6ksr2>Sobre</a> <a href="#servicos" class="mobile-link" data-astro-cid-3ef6ksr2>Serviços</a> <a href="#processo" class="mobile-link" data-astro-cid-3ef6ksr2>Como funciona</a> <a href="#faq" class="mobile-link" data-astro-cid-3ef6ksr2>FAQ</a> <a href="/blog/" class="mobile-link" data-astro-cid-3ef6ksr2>Blog</a> <a href="#servicos" class="mobile-link mobile-link--cta" data-astro-cid-3ef6ksr2>Agendar consulta</a> </nav> </header>  ${renderScript($$result, "C:/Users/Dell/Documents/projetos/jadytarot.com.br/src/components/Header.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Dell/Documents/projetos/jadytarot.com.br/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const anoAtual = (/* @__PURE__ */ new Date()).getFullYear();
  const links = [
    { label: "In\xEDcio", href: "#home" },
    { label: "Sobre", href: "#sobre" },
    { label: "Servi\xE7os", href: "#servicos" },
    { label: "Agenda", href: "#agendar" }
  ];
  return renderTemplate`${maybeRenderHead()}<footer class="footer" role="contentinfo" data-astro-cid-sz7xmlte> <div class="footer__top-line divider" aria-hidden="true" data-astro-cid-sz7xmlte></div> <div class="container footer__inner" data-astro-cid-sz7xmlte> <!-- Coluna 1 — Logo e tagline --> <div class="footer__brand" data-astro-cid-sz7xmlte> <a href="/" class="footer__logo" aria-label="Jady Mota — início" data-astro-cid-sz7xmlte> <span class="footer__logo-name" data-astro-cid-sz7xmlte>JADY MOTA</span> <span class="footer__logo-tagline" data-astro-cid-sz7xmlte>Escuta · Simbolização · Elaboração</span> </a> </div> <!-- Coluna 2 — Links --> <nav class="footer__nav" aria-label="Links do footer" data-astro-cid-sz7xmlte> ${links.map((link) => renderTemplate`<a${addAttribute(link.href, "href")} class="footer__link" data-astro-cid-sz7xmlte>${link.label}</a>`)} <a href="https://instagram.com/jadytarot" target="_blank" rel="noopener noreferrer" class="footer__link footer__link--ig" aria-label="Instagram @jadytarot" data-astro-cid-sz7xmlte>
Instagram
</a> </nav> <!-- Coluna 3 — Contato / CTA mini --> <div class="footer__cta" data-astro-cid-sz7xmlte> <a href="#servicos" class="footer__cta-link" data-astro-cid-sz7xmlte>
Agendar consulta →
</a> </div> </div> <div class="container footer__bottom" data-astro-cid-sz7xmlte> <p class="footer__copy" data-astro-cid-sz7xmlte>
© ${anoAtual} Jady Mota · Todos os direitos reservados
</p> <p class="footer__credit" data-astro-cid-sz7xmlte>
Desenvolvido por <a href="https://jiupter.com.br" target="_blank" rel="noopener noreferrer" data-astro-cid-sz7xmlte>Jiupter</a> </p> </div> </footer> <!-- CTA Sticky Mobile --> <div class="sticky-cta" aria-label="Ação rápida mobile" data-astro-cid-sz7xmlte> <a href="#servicos" class="sticky-cta__btn" data-astro-cid-sz7xmlte>
Agendar consulta
</a> </div> `;
}, "C:/Users/Dell/Documents/projetos/jadytarot.com.br/src/components/Footer.astro", void 0);

export { $$Header as $, $$Footer as a, $$Layout as b };
