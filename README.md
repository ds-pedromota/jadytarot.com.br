# Jady Mota · Tarot Terapêutico
> Site institucional — Astro · Vercel

---

## 🚀 Rodando localmente

```bash
npm install
npm run dev
# → http://localhost:4321
```

## 📦 Build para produção

```bash
npm run build
npm run preview   # pré-visualizar o build
```

---

## 🖼️ Fotos — onde colocar e qual nome usar

Todas as fotos vão em `/public/images/`. Use exatamente esses nomes de arquivo:

| Arquivo                          | Seção              | Descrição                                      |
|----------------------------------|--------------------|------------------------------------------------|
| `jady-fosforo-bicolor.jpg`       | Hero               | Fósforo aceso, iluminação bicolor red/blue     |
| `jady-pb-blazer.jpg`             | Quem Sou           | P&B, blazer preto, cobra tatuada, mesa         |
| `jady-margaridas.jpg`            | Quem Sou / apoio   | Campo de margaridas, olhar sereno              |
| `jady-velas-ambas-maos.jpg`      | Como Funciona      | Vela nas duas mãos, velas ao fundo             |
| `jady-fosforo-close.jpg`         | Frase de Impacto   | Close extremo, fósforo, lábios vermelhos       |
| `jady-vela-simples-fundo-claro.jpg` | CTA Final       | Vela simples, fundo claro, batom vinho         |
| `og-fosforo.jpg`                 | Open Graph         | Usar a foto do hero (1200×630px mínimo)        |

### Como ativar cada foto

Cada componente tem um bloco comentado. Basta:
1. Adicionar o arquivo em `/public/images/`
2. No componente, comentar o `<div class="...photo-placeholder">` e descomentar o `<img>` abaixo

Exemplo em `Hero.astro`:
```html
<!-- Antes (placeholder): -->
<div class="hero__photo-placeholder">...</div>

<!-- Depois (imagem real): -->
<img src="/images/jady-fosforo-bicolor.jpg" alt="..." loading="eager" />
```

---

## 🌐 Deploy na Vercel

1. Inicializar git e subir para GitHub:
   ```bash
   git init
   git add .
   git commit -m "feat: site Jady Mota inicial"
   git remote add origin <URL-DO-REPO>
   git push -u origin main
   ```

2. Em [vercel.com](https://vercel.com):
   - Import project → selecionar o repo
   - Framework: **Astro** (detectado automaticamente)
   - Build: `astro build` · Output: `dist`
   - **Deploy**

3. Domínio:
   - Temporário: `jadytarot.jiupter.com.br`
   - Futuro: `jadytarot.com.br` → configurar em Settings → Domains

---

## 📅 Integração de agendamento (próximo passo)

### Opção A — Calendly (mais rápido)
1. Criar conta em calendly.com
2. Criar 3 tipos de evento (Consulta / Essencial / Intensivo)
3. Conectar ao Google Calendar
4. Ativar pagamento via Stripe no Calendly
5. Nos cards de serviço (`Servicos.astro`), substituir `href="#agendar"` pela URL do Calendly:
   ```
   https://calendly.com/jadymota/consulta-individual
   ```

### Opção B — Cal.com (open-source, mais controle)
1. Deploy próprio ou conta gratuita em cal.com
2. Embed via `<iframe>` ou redirect
3. Integração nativa com Google Calendar e Stripe

---

## 📬 Newsletter (opcional)
- **MailerLite** (free até 1.000 contatos): adicionar form embed na seção FAQ ou Footer
- **Mailchimp**: alternativa

---

## 🔍 SEO e Analytics

### Google Analytics 4
Adicionar em `src/layouts/Layout.astro`, antes de `</head>`:
```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Meta Pixel (Facebook/Instagram Ads)
Adicionar após o GA, antes de `</head>`:
```html
<script>
  !function(f,b,e,v,n,t,s){...}(window,document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', 'SEU_PIXEL_ID');
  fbq('track', 'PageView');
</script>
```

---

## ✅ Checklist pré-lançamento

- [ ] Todas as 6 fotos adicionadas em `/public/images/`
- [ ] OG image criada (1200×630px) como `og-fosforo.jpg`
- [ ] Calendly ou Cal.com configurado e links dos cards atualizados
- [ ] Google Analytics 4 instalado
- [ ] Meta Pixel instalado
- [ ] Domínio temporário `jadytarot.jiupter.com.br` configurado na Vercel
- [ ] HTTPS ativo (automático na Vercel)
- [ ] PageSpeed > 85 (verificar em pagespeed.web.dev)
- [ ] Imagens convertidas para WebP (use squoosh.app)
- [ ] Testar no iPhone SE e Galaxy A-series
- [ ] Política de privacidade e cookies (LGPD) — adicionar página `/privacidade`
- [ ] Link do Instagram funcionando no header e footer
- [ ] Formulário de contato configurado (pode usar Formspree.io para começar)

---

## 📁 Estrutura do projeto

```
jadytarot.com.br/
├── public/
│   ├── images/           ← FOTOS AQUI
│   └── favicon.svg
└── src/
    ├── components/
    │   ├── Header.astro
    │   ├── Hero.astro            ← foto: jady-fosforo-bicolor.jpg
    │   ├── Posicionamento.astro
    │   ├── QuemSou.astro         ← foto: jady-pb-blazer.jpg
    │   ├── Servicos.astro        ← CTAs de agendamento
    │   ├── ComoFunciona.astro    ← foto: jady-velas-ambas-maos.jpg
    │   ├── FraseImpacto.astro    ← foto: jady-fosforo-close.jpg
    │   ├── FAQ.astro
    │   ├── CTAFinal.astro        ← foto: jady-vela-simples-fundo-claro.jpg
    │   └── Footer.astro
    ├── layouts/
    │   └── Layout.astro          ← meta tags, fonts, schema.org
    ├── pages/
    │   └── index.astro           ← composição da home
    └── styles/
        └── global.css            ← tokens, reset, utilitários
```

---

_Desenvolvido por Jiupter · Do dado à decisão._
_Cliente: Jady Mota · Tarot Terapêutico · v1.0 · 2026_
