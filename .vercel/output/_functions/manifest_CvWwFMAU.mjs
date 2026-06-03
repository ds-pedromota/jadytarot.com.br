import 'piccolore';
import { q as decodeKey } from './chunks/astro/server_CaiWAfgU.mjs';
import 'clsx';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_8dotaqUX.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/Dell/Documents/projetos/jadytarot.com.br/","cacheDir":"file:///C:/Users/Dell/Documents/projetos/jadytarot.com.br/node_modules/.astro/","outDir":"file:///C:/Users/Dell/Documents/projetos/jadytarot.com.br/dist/","srcDir":"file:///C:/Users/Dell/Documents/projetos/jadytarot.com.br/src/","publicDir":"file:///C:/Users/Dell/Documents/projetos/jadytarot.com.br/public/","buildClientDir":"file:///C:/Users/Dell/Documents/projetos/jadytarot.com.br/dist/client/","buildServerDir":"file:///C:/Users/Dell/Documents/projetos/jadytarot.com.br/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_slug_.C2UCvnLf.css"},{"type":"external","src":"/_astro/index.CSVqSE6Z.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_slug_.C2UCvnLf.css"},{"type":"inline","content":".post-main[data-astro-cid-4sn4zg3r]{background:var(--bg-primary);min-height:100vh}.post-hero[data-astro-cid-4sn4zg3r]{position:relative;height:clamp(320px,50vw,560px);overflow:hidden}.post-hero__image[data-astro-cid-4sn4zg3r]{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center top;filter:brightness(.75)}.post-hero__overlay[data-astro-cid-4sn4zg3r]{position:absolute;inset:0;background:linear-gradient(to bottom,#0d08054d,#0d0805b3 70%,#0d0805f2)}.post-hero__content[data-astro-cid-4sn4zg3r]{position:absolute;bottom:0;left:50%;transform:translate(-50%);width:100%;padding-bottom:clamp(32px,5vw,56px)}.post-hero__meta[data-astro-cid-4sn4zg3r]{display:flex;gap:8px;margin-bottom:16px;flex-wrap:wrap}.post-hero__cat[data-astro-cid-4sn4zg3r]{font-family:Cinzel,serif;font-size:9px;font-weight:400;letter-spacing:.18em;text-transform:uppercase;color:var(--gold);text-decoration:none;background:#0d0805b3;padding:5px 12px;border-radius:2px;transition:color .2s ease}.post-hero__cat[data-astro-cid-4sn4zg3r]:hover{color:var(--gold-soft)}.post-hero__title[data-astro-cid-4sn4zg3r]{font-family:Cinzel,serif;font-size:clamp(24px,4vw,42px);font-weight:400;color:var(--gold-soft);line-height:1.25;letter-spacing:.02em;margin-bottom:16px;max-width:800px}.post-hero__info[data-astro-cid-4sn4zg3r]{font-family:Jost,sans-serif;font-size:12px;font-weight:300;letter-spacing:.08em;color:#a09080cc}.post-content[data-astro-cid-4sn4zg3r]{padding-top:clamp(48px,7vw,80px);padding-bottom:clamp(80px,12vw,140px)}.post-body[data-astro-cid-4sn4zg3r]{max-width:720px;margin:0 auto}.post-body[data-astro-cid-4sn4zg3r] p{font-family:Cormorant Garamond,serif;font-size:clamp(17px,1.5vw,20px);font-weight:300;line-height:1.9;color:var(--text);margin-bottom:1.5em}.post-body[data-astro-cid-4sn4zg3r] h2{font-family:Cinzel,serif;font-size:clamp(18px,2vw,24px);font-weight:400;color:var(--gold-soft);letter-spacing:.04em;margin:2.4em 0 .8em;line-height:1.3}.post-body[data-astro-cid-4sn4zg3r] h3{font-family:Cinzel,serif;font-size:clamp(15px,1.6vw,19px);font-weight:400;color:var(--gold-soft);letter-spacing:.03em;margin:2em 0 .6em}.post-body[data-astro-cid-4sn4zg3r] strong{font-weight:400;color:var(--gold-soft)}.post-body[data-astro-cid-4sn4zg3r] em{font-style:italic;color:#e8d5a3d9}.post-body[data-astro-cid-4sn4zg3r] a{color:var(--gold);text-decoration:underline;text-underline-offset:3px;transition:color .2s ease}.post-body[data-astro-cid-4sn4zg3r] a:hover{color:var(--gold-soft)}.post-body[data-astro-cid-4sn4zg3r] ul,.post-body[data-astro-cid-4sn4zg3r] ol{margin:0 0 1.5em 1.6em}.post-body[data-astro-cid-4sn4zg3r] li{font-family:Cormorant Garamond,serif;font-size:clamp(17px,1.5vw,20px);font-weight:300;line-height:1.8;color:var(--text);margin-bottom:.4em}.post-body[data-astro-cid-4sn4zg3r] blockquote{border-left:2px solid rgba(201,168,76,.5);margin:2em 0;padding:4px 0 4px 24px}.post-body[data-astro-cid-4sn4zg3r] blockquote p{font-style:italic;color:var(--gold-soft);font-size:clamp(18px,1.7vw,22px)}.post-body[data-astro-cid-4sn4zg3r] img{max-width:100%;height:auto;border-radius:4px;margin:2em auto;display:block}.post-body[data-astro-cid-4sn4zg3r] hr{border:none;border-top:1px solid rgba(201,168,76,.2);margin:3em 0}.post-body[data-astro-cid-4sn4zg3r] code{font-family:monospace;font-size:.85em;background:#c9a84c14;color:var(--gold-soft);padding:2px 6px;border-radius:2px}.post-footer[data-astro-cid-4sn4zg3r]{max-width:720px;margin:0 auto;padding-top:48px}.post-footer__divider[data-astro-cid-4sn4zg3r]{width:100%;height:1px;background:linear-gradient(to right,transparent,rgba(201,168,76,.35) 30%,rgba(201,168,76,.35) 70%,transparent);margin-bottom:32px}.post-footer__back[data-astro-cid-4sn4zg3r]{font-family:Jost,sans-serif;font-size:11px;font-weight:300;letter-spacing:.12em;text-transform:uppercase;color:var(--gold);text-decoration:none;transition:letter-spacing .2s ease}.post-footer__back[data-astro-cid-4sn4zg3r]:hover{letter-spacing:.18em}\n"}],"routeData":{"route":"/blog/[slug]","isIndex":false,"type":"page","pattern":"^\\/blog\\/([^/]+?)\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"slug","dynamic":true,"spread":false}]],"params":["slug"],"component":"src/pages/blog/[slug].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_slug_.C2UCvnLf.css"},{"type":"external","src":"/_astro/index.CXdQxOrr.css"}],"routeData":{"route":"/blog","isIndex":true,"type":"page","pattern":"^\\/blog\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/index.astro","pathname":"/blog","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"https://jadytarot.com.br","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/Dell/Documents/projetos/jadytarot.com.br/src/pages/blog/[slug].astro",{"propagation":"none","containsHead":true}],["C:/Users/Dell/Documents/projetos/jadytarot.com.br/src/pages/blog/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/Dell/Documents/projetos/jadytarot.com.br/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astro-page:src/pages/blog/[slug]@_@astro":"pages/blog/_slug_.astro.mjs","\u0000@astro-page:src/pages/blog/index@_@astro":"pages/blog.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_CvWwFMAU.mjs","C:/Users/Dell/Documents/projetos/jadytarot.com.br/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_DePNl-jP.mjs","C:/Users/Dell/Documents/projetos/jadytarot.com.br/src/components/FAQ.astro?astro&type=script&index=0&lang.ts":"_astro/FAQ.astro_astro_type_script_index_0_lang.CNHHVb_-.js","C:/Users/Dell/Documents/projetos/jadytarot.com.br/src/components/Header.astro?astro&type=script&index=0&lang.ts":"_astro/Header.astro_astro_type_script_index_0_lang.HeBX5qq0.js","C:/Users/Dell/Documents/projetos/jadytarot.com.br/src/components/Servicos.astro?astro&type=script&index=0&lang.ts":"_astro/Servicos.astro_astro_type_script_index_0_lang.DOOyZj-z.js","C:/Users/Dell/Documents/projetos/jadytarot.com.br/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts":"_astro/Layout.astro_astro_type_script_index_0_lang.BYXBacws.js","C:/Users/Dell/Documents/projetos/jadytarot.com.br/src/pages/blog/index.astro?astro&type=script&index=0&lang.ts":"_astro/index.astro_astro_type_script_index_0_lang.BufFP0zf.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["C:/Users/Dell/Documents/projetos/jadytarot.com.br/src/components/FAQ.astro?astro&type=script&index=0&lang.ts","const s=document.querySelectorAll(\".faq__question\");s.forEach(e=>{const r=e.getAttribute(\"aria-controls\"),i=r?document.getElementById(r):null;e.addEventListener(\"click\",()=>{const d=e.getAttribute(\"aria-expanded\")===\"true\";s.forEach(t=>{const a=t.getAttribute(\"aria-controls\"),n=a?document.getElementById(a):null;t!==e&&(t.setAttribute(\"aria-expanded\",\"false\"),n?.setAttribute(\"hidden\",\"\"))}),d?(e.setAttribute(\"aria-expanded\",\"false\"),i?.setAttribute(\"hidden\",\"\")):(e.setAttribute(\"aria-expanded\",\"true\"),i?.removeAttribute(\"hidden\"))})});"],["C:/Users/Dell/Documents/projetos/jadytarot.com.br/src/components/Header.astro?astro&type=script&index=0&lang.ts","const n=document.getElementById(\"site-header\"),t=document.querySelector(\".menu-toggle\"),s=document.getElementById(\"mobile-menu\"),i=document.querySelectorAll(\".mobile-link\");window.addEventListener(\"scroll\",()=>{n?.classList.toggle(\"scrolled\",window.scrollY>40)},{passive:!0});t?.addEventListener(\"click\",()=>{const e=t.classList.toggle(\"open\");s?.classList.toggle(\"open\",e),t.setAttribute(\"aria-expanded\",String(e)),s?.setAttribute(\"aria-hidden\",String(!e))});i.forEach(e=>{e.addEventListener(\"click\",()=>{t?.classList.remove(\"open\"),s?.classList.remove(\"open\"),t?.setAttribute(\"aria-expanded\",\"false\"),s?.setAttribute(\"aria-hidden\",\"true\")})});"],["C:/Users/Dell/Documents/projetos/jadytarot.com.br/src/components/Servicos.astro?astro&type=script&index=0&lang.ts","const s=Array.from(document.querySelectorAll(\".card-scene\")),c=document.querySelector(\".cards-grid\"),d=Array.from(document.querySelectorAll(\".servicos__dot\")),l=!window.matchMedia(\"(hover: hover) and (pointer: fine)\").matches;if(l&&(s.forEach(t=>{t.addEventListener(\"click\",r=>{if(r.target.closest(\"[data-no-flip]\"))return;const a=t.classList.contains(\"flipped\");s.forEach(e=>{e.classList.remove(\"flipped\"),e.setAttribute(\"aria-expanded\",\"false\")}),a||(t.classList.add(\"flipped\"),t.setAttribute(\"aria-expanded\",\"true\"))})}),c&&d.length)){let t;const r=()=>{const e=(s[0]?.offsetWidth??0)+16;return Math.round(c.scrollLeft/e)},a=()=>{const e=r();d.forEach((i,o)=>i.classList.toggle(\"active\",o===e))};c.addEventListener(\"scroll\",()=>{a(),clearTimeout(t),t=setTimeout(()=>{const e=r();s.forEach((i,o)=>{o!==e&&(i.classList.remove(\"flipped\"),i.setAttribute(\"aria-expanded\",\"false\"))})},150)},{passive:!0}),a(),d.forEach((e,i)=>{e.addEventListener(\"click\",()=>{const o=(s[0]?.offsetWidth??0)+16;c.scrollTo({left:i*o,behavior:\"smooth\"})})})}s.forEach(t=>{t.addEventListener(\"keydown\",r=>{if(r.key!==\"Enter\"&&r.key!==\" \")return;r.preventDefault();const a=t.classList.contains(\"flipped\");s.forEach(e=>{e.classList.remove(\"flipped\"),e.setAttribute(\"aria-expanded\",\"false\")}),a||(t.classList.add(\"flipped\"),t.setAttribute(\"aria-expanded\",\"true\"))})});"],["C:/Users/Dell/Documents/projetos/jadytarot.com.br/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts","const s=new IntersectionObserver(e=>{e.forEach(r=>{r.isIntersecting&&r.target.classList.add(\"visible\")})},{threshold:.12,rootMargin:\"0px 0px -40px 0px\"});document.querySelectorAll(\".fade-in\").forEach(e=>s.observe(e));"],["C:/Users/Dell/Documents/projetos/jadytarot.com.br/src/pages/blog/index.astro?astro&type=script&index=0&lang.ts","const c=document.getElementById(\"post-grid\"),g=Array.from(document.querySelectorAll(\".pill\")),o=document.getElementById(\"pagination\");if(!c)throw new Error(\"post-grid not found\");const s=Array.from(c.querySelectorAll(\".post-grid__item\"));let i=\"\",a=1;function u(){return i?s.filter(e=>(e.dataset.categories??\"\").split(\" \").includes(i)):s}function l(){const e=u(),n=(a-1)*9,t=n+9;s.forEach(r=>{r.hidden=!0}),e.slice(n,t).forEach(r=>{r.hidden=!1}),g.forEach(r=>{const d=r.dataset.category===i;r.classList.toggle(\"active\",d),r.setAttribute(\"aria-pressed\",String(d))}),f(Math.ceil(e.length/9)),a>1&&c?.scrollIntoView({behavior:\"smooth\",block:\"start\"})}function f(e){if(!o)return;if(e<=1){o.innerHTML=\"\";return}const n=[];a>1&&n.push(`<button class=\"page-btn page-btn--nav\" data-page=\"${a-1}\">← Anterior</button>`);for(let t=1;t<=e;t++)n.push(`<button class=\"page-btn${t===a?\" page-btn--active\":\"\"}\" data-page=\"${t}\" aria-label=\"Página ${t}\" aria-current=\"${t===a?\"page\":\"false\"}\">${t}</button>`);a<e&&n.push(`<button class=\"page-btn page-btn--nav\" data-page=\"${a+1}\">Próxima →</button>`),o.innerHTML=n.join(\"\"),o.querySelectorAll(\"[data-page]\").forEach(t=>{t.addEventListener(\"click\",()=>{a=Number(t.dataset.page),l()})})}g.forEach(e=>{e.addEventListener(\"click\",()=>{i=e.dataset.category??\"\",a=1,l()})});l();"]],"assets":["/_astro/_slug_.C2UCvnLf.css","/_astro/index.CXdQxOrr.css","/_astro/index.CSVqSE6Z.css","/favicon.svg","/images/blog-placeholder.svg","/images/jady-fosforo-bicolor.jpg","/images/jady-fosforo-close.jpg","/images/jady-margaridas.jpg","/images/jady-pb-blazer.jpg","/images/jady-vela-simples-fundo-claro.jpg","/images/jady-velas-ambas-maos.jpg","/images/og-fosforo.jpg","/index.html"],"buildFormat":"directory","checkOrigin":true,"allowedDomains":[],"actionBodySizeLimit":1048576,"serverIslandNameMap":[],"key":"BNFVL8C9NhbuKl39UZEk7jKnocinTgNa1pXpUy7FEHc="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
