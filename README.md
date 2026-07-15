# Renan Duarte — Portal Digital

Plataforma moderna de venda de cursos online e produtos PLR do empreendedor digital **Renan Duarte**.

## Stack

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion**
- **Shadcn/UI** (componentes customizados)
- **SEO avançado** (Schema.org, Sitemap, Open Graph)
- **Analytics** (GTM, GA, Meta Pixel)

## Páginas

| Rota | Descrição |
|------|-----------|
| `/` | Landing page de conversão |
| `/cursos` | Catálogo de cursos |
| `/cursos/[slug]` | Detalhe do curso |
| `/ebooks` | Catálogo de ebooks PLR com filtros |
| `/biografia` | Trajetória do Renan Duarte |
| `/blog` | Blog integrado |
| `/blog/[slug]` | Artigo individual |
| `/admin/login` | Login administrativo |
| `/admin/dashboard` | Painel admin |

## Início Rápido

```bash
npm install
cp .env.example .env.local
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

## Configuração

Copie `.env.example` para `.env.local` e configure:

- `NEXT_PUBLIC_WHATSAPP_NUMBER` — Número do WhatsApp
- `NEXT_PUBLIC_GTM_ID` — Google Tag Manager
- `NEXT_PUBLIC_GA_ID` — Google Analytics
- `NEXT_PUBLIC_META_PIXEL_ID` — Meta Pixel (Facebook Ads)
- URLs de checkout (Hotmart, Kiwify, Eduzz, Perfect Pay)
- Credenciais admin

## Funcionalidades

- Landing page focada em conversão
- Catálogo de cursos e ebooks com filtros
- Captura de leads e newsletter (API routes)
- Integração WhatsApp flutuante
- SEO com Schema.org, sitemap e breadcrumbs
- Preparado para Google Ads e Meta Ads
- Login administrativo
- Design premium dark (preto, azul escuro, dourado, branco)
- Responsivo mobile e desktop
- Animações Framer Motion

## Imagens

As fotos do Renan Duarte estão em `public/images/`:
- `renan-professional.png` — Foto profissional
- `renan-japan.png` — Viagem ao Japão

## Deploy

```bash
npm run build
npm start
```

Recomendado: [Vercel](https://vercel.com) para deploy com zero configuração.
