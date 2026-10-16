# Contexto do projeto — Tarifly

> **Para o Claude:** este arquivo é um resumo completo do projeto "Tarifly". Se o usuário colou isso numa conversa nova, é porque perdeu o histórico anterior. Leia tudo abaixo e trate como contexto já estabelecido — não precisa redescobrir nada disso, só confirmar que os fatos abaixo ainda batem com o estado atual (rodando `git log`, `git status`, checando a Vercel, etc.) antes de agir sobre eles.

## O que é o projeto

Site comparador de viagens (voos e hospedagem) no modelo "metabusca" (igual Skyscanner/Kayak/Aviasales): o usuário busca, compara preços de várias companhias/agências, e é redirecionado pro site do vendedor real pra comprar. Monetização por comissão de afiliado (Travelpayouts), sem processar pagamento nem responsabilidade contratual pela viagem.

**Marca própria e independente** — sem nenhum vínculo visível com a 2N Travel (agência de viagens do mesmo usuário, projeto `2ntravel-proposta`). São públicos e propostas de valor diferentes: a 2N Travel é consultoria personalizada; o Tarifly é autoatendimento pra quem já resolve tudo online.

**Público-alvo:** "geração internet" — nativos digitais que preferem buscar e reservar sozinhos, sem atendimento por telefone/WhatsApp.

**Tagline:** "viagem no seu ritmo"

**Posicionamento do hero atual:** "Você já resolve tudo online. Viagem também."

## Onde tudo está

| O quê | Onde |
|---|---|
| Código local | `C:\Users\diret\OneDrive\Documentos\Projetos-DESKTOP-V9SC935\tarifly` |
| Repositório GitHub | https://github.com/tariflyoficial-tech/tarifly |
| Conta GitHub dona do repo | `tariflyoficial-tech` (conta própria do projeto, separada das outras contas do usuário — precisa `gh auth login` com ela pra ter permissão de push) |
| Deploy em produção | https://tarifly.vercel.app (estável, sem login) |
| Painel Vercel | projeto `tarifly` no time/scope `nerd14`, conta `tariflyoficial-tech` |
| Domínio próprio | `tarifly.com.br` — **no ar** (responde 200, também `www`), é o domínio canônico (canonical, sitemap e schema.org apontam pra ele). `tarifly.vercel.app` continua respondendo, sem redirecionar |
| Google Search Console | propriedade `tarifly.com.br` já cadastrada pelo usuário (2026-10-15). Conferir se o `sitemap.xml` foi enviado em "Sitemaps" |
| Config do servidor local (Claude Code) | `C:\Users\diret\OneDrive\Documentos\Claude_Code\.claude\launch.json`, entrada `tarifly-dev` (usa `npm --prefix <caminho> run dev` porque o launch.json fica na raiz da sessão, não dentro da pasta do projeto) |
| Identidade Git configurada neste repo | nome "Alex", e-mail `55digitaloficial@gmail.com` (config local do repo, não global) |

⚠️ **Nota sobre a URL de deployment direta**: URLs tipo `tarifly-xxxxx-nerd14.vercel.app` (deployment específico) pedem login — é a proteção padrão da Vercel. Use sempre `tarifly.vercel.app` (alias estável) até o domínio próprio estar no ar.

## Stack técnica

- **Next.js** (App Router, TypeScript, Tailwind CSS) — mesma linha de stack do 2ntravel-proposta, mas projeto **totalmente separado** (sem Prisma/banco de dados por enquanto, não precisa).
- Sem dark mode automático (removido de propósito — no 2ntravel-proposta isso já causou bug de texto invisível; aqui nem foi habilitado).
- Cores de marca em `app/globals.css`: `--brand: #0f3d73` (azul), `--accent: #ff6a3d` (laranja).

## Estrutura de páginas/componentes

- `app/page.tsx` — landing page: header com logo+tagline e menu (Passagens, Hospedagem, Como funciona, **Blog**), hero, widget de busca, 3 cards de diferenciais, footer com aviso de afiliado. Visual azul `#0f3d73` + laranja `#ff6a3d`.
- `app/components/SearchWidget.tsx` — formulário com abas Passagens e Hospedagem. **Busca desativada**: o submit só mostra um alert "Busca ainda não conectada" (ver "Estado da busca" abaixo).
- `app/layout.tsx` — metadata global (`metadataBase`, canonical `./`, openGraph), fonte e o script Travelpayouts Drive.
- `app/sitemap.ts` / `app/robots.ts` — sitemap gerado **varrendo `app/destinos`** (todo `page.tsx` novo entra sozinho) com `lastmod` vindo de `posts.ts`; robots aponta pro sitemap em `tarifly.com.br`.
- `app/lib/site.ts` — `SITE_URL` (`https://tarifly.com.br`) e `SITE_NAME`.
- `app/lib/posts.ts` — **lista central dos artigos do blog** (ver seção "Blog").
- `app/destinos/` — o blog (URLs `/destinos/...` mantidas de propósito; o menu chama "Blog"). Tem `layout.tsx` próprio (tema editorial, cabeçalho, rodapé), `page.tsx` (índice) e `orlando/` (guia principal + artigos).
- `app/components/`: `ArticleJsonLd` (schema Article + BreadcrumbList), `PostMeta` (data de publicação + capa), `BuscarCTA`, `VistoCTA` (chamada pro visto, link externo pra rotaconsular.com.br), `MaisLidas` (3 artigos com capa no fim da leitura), `PlaceAutocomplete`, `SearchWidget`.

## Modelo de negócio (Travelpayouts)

- **Voos** → era via **Aviasales** (marker real `777208`), mas a busca está **desativada** desde o commit `97d8464`: o Aviasales não tem português/Real. A ideia era trocar pro Trip.com (via Travelpayouts), que também depende de aprovação.
- **Hospedagem** → Hotellook **não existe mais** (descontinuado em out/2025). Alternativa: Booking.com dentro da Travelpayouts. **Status em 2026-10-15: NÃO aprovado.** O painel mostra "20 programas indisponíveis para o Tarifly" por dois motivos: (1) pouco tráfego (querem tráfego mensal estável por pelo menos 3 meses seguidos) e (2) pouco conteúdo de viagem (querem blog ativo, atualizado com frequência e com bom tráfego). Existe o botão "Submeter para revisão" na Travelpayouts, pra usar só quando houver tráfego estável.
- Fluxo: usuário busca no Tarifly → clica num resultado → é redirecionado pro site do vendedor real (companhia aérea ou agência/OTA, decidido pelo próprio Aviasales/Hotellook conforme melhor preço) → compra e pagamento acontecem lá, fora do Tarifly.
- Comissão paga mensalmente pelo Travelpayouts, consolidada (não precisa cobrar nada de cada parceiro individualmente).
- **Responsabilidade do Tarifly**: nenhuma sobre a venda em si (pagamento, emissão, cancelamento, reembolso são do vendedor final). Mas precisa manter: (1) transparência/disclaimer de afiliado (já no footer), (2) política de privacidade (LGPD) se coletar dados do usuário.
- **Considerado mas descartado por ora**: API própria/direta do Booking.com — reservada a parceiros de alto volume de reservas, processo de aprovação em várias etapas; não é viável como ponto de partida.
- **Sobre "ser tão potente quanto o Skyscanner"**: não é a mesma tecnologia. Skyscanner é empresa independente (grupo Trip.com); o Tarifly usa a tecnologia Aviasales/Hotellook via Travelpayouts, que é boa mas não idêntica em cobertura/algoritmo ao Skyscanner. Curiosidade: o Skyscanner também aparece como um dos programas de afiliados dentro da própria rede Travelpayouts, então dá pra somar como fonte extra futuramente.

## O que falta (atualizado em 2026-10-16)

**Prioridade: tráfego.** A aprovação do Booking.com (e do Trip.com) depende de tráfego estável por 3 meses + blog ativo. Sem isso, implementar a aba Hospedagem não rende comissão.

1. **Search Console**: confirmar que o `sitemap.xml` foi enviado (aba "Sitemaps") e pedir indexação (Inspeção de URL → "Solicitar indexação") dos artigos mais novos, em especial `roteiro-7-dias`, `outlets-em-orlando`, `orlando-com-criancas` e `supermercado-em-orlando`.
2. **Publicar com frequência**: ritmo sugerido de 1 artigo por semana. Próximo da fila: **clima de Orlando mês a mês e o que levar na mala**. Outras ideias: Disney Springs/CityWalk, Epic Universe, Orlando sem carro, Orlando em lua de mel/casal.
3. **Revisar os "Destaques"** do blog com dados reais: em Search Console → Desempenho → Páginas, ver quais artigos recebem mais cliques e atualizar o `destaque: true` em `posts.ts`.
4. **Link cruzado do `rota-consular`**: o sentido Tarifly → Rota Consular **já existe** (chamada `VistoCTA` no fim de cada artigo). **Falta o sentido contrário**: um link no site do Rota Consular apontando pro guia de Orlando (principal fonte de tráfego qualificado; é só um link externo, sem integração técnica). Essa tarefa é feita no repositório do `rota-consular`, não neste.
5. **Tráfego fora do Google**: Pinterest, YouTube Shorts, grupos de viagem pra Orlando.
6. **Quando houver tráfego estável (~3 meses)**: clicar em "Submeter para revisão" no painel da Travelpayouts (Booking.com e Trip.com) e, se aprovar, implementar o link de afiliado (formato `https://tp.media/r?marker=X&p=Y&u=<url-encoded>`, precisa também de um `aid` da Booking.com) na aba Hospedagem e dentro dos artigos `onde-ficar-em-orlando` e `casa-de-temporada-ou-hotel`.
7. **Decidir a busca de voos**: reativar o Aviasales (funciona, mas sem português/Real), esperar o Trip.com, ou usar só links dentro dos artigos.
8. **Ativar o Travelpayouts Drive de verdade** (hoje só instalado pra passar o onboarding) quando houver conteúdo e tráfego.
9. **Pequenos acertos pendentes**: (a) a capa de `quantos-dias-ficar` tem rostos em destaque e a palavra "Viagem" legível no calendário (fora do padrão; opcional refazer); (b) apagar os PNGs originais `*.png.png` da pasta `public/blog/` (não estão no Git, são só cópias locais); (c) o texto de `quantos-dias-ficar` ainda fala em "ajuste de fuso" (diferença é de 1-2h, vale suavizar).

## Histórico do que já foi feito

1. Ideia inicial veio de uma pesquisa no Gemini sobre monetização por afiliados de viagem (Travelpayouts, Skyscanner API, Booking.com Affiliate).
2. Avaliado e descartado: API própria do Booking.com (exige alto volume/aprovação), branding como extensão da 2N Travel (risco de confundir clientes da agência).
3. Decidido: marca independente, sem nome da empresa, focada em "geração internet"/autoatendimento.
4. Nome escolhido: **Tarifly** (checado disponibilidade real via RDAP do Registro.br — `.com.br` estava livre). Registro do domínio já solicitado pelo usuário, aguardando aprovação.
5. Projeto Next.js criado localmente, landing page + widget de busca (abas Passagens/Hospedagem) construídos e testados (desktop + mobile) no navegador local.
6. Repositório GitHub criado pelo usuário (`tariflyoficial-tech/tarifly`); código commitado e enviado (`git push`) depois de logar o `gh` CLI com a conta certa.
7. Projeto conectado à Vercel (conta `tariflyoficial-tech`, time `nerd14`); deploy automático confirmado funcionando em `tarifly.vercel.app`.
8. Domínio `tarifly.com.br` pago e ativo; DNS migrado pra Cloudflare (nameservers `damien.ns.cloudflare.com` / `zita.ns.cloudflare.com`), registros A `@` e `www` apontando pra `76.76.21.21` (Vercel). Domínio adicionado ao projeto Vercel (`vercel domains add`). Propagação em andamento.
9. Busca de voos conectada de verdade: autocomplete de cidade/aeroporto (API pública `autocomplete.travelpayouts.com`) + redirecionamento pro link de afiliado do Aviasales (`aviasales.com/search/{PARAMS}?marker=777208`, marker real da conta). **Bug de ambiente corrigido**: chamada à API externa dava erro de certificado TLS no Windows local — resolvido com `NODE_OPTIONS=--use-system-ca` via `cross-env` no script `dev`/`start` do `package.json`.
10. **Hotellook foi descontinuado em 20/10/2025** (confirmado na documentação oficial da Travelpayouts) — não existe mais API de hotel pronta. Alternativa: conectar programas individuais (ex: Booking.com) dentro da Travelpayouts, cada um com aprovação e formato de link próprios. Usuário já solicitou conexão com o programa Booking.com (comissão 3-5%, cookie de 1 sessão) — **status: em análise, aguardando aprovação** (a Travelpayouts avisa que leva alguns dias). A aba Hospedagem do site continua com alerta "em breve" até essa aprovação sair.
11. Instalado o script "Travelpayouts Drive" (ferramenta oficial de monetização automática de conteúdo, confirmada como legítima via documentação e vídeo tutorial oficial) — necessário pra destravar o onboarding da conta Travelpayouts, que travava numa tela de verificação sem esse script. **Detalhes técnicos importantes**: (a) o script precisa ser uma tag `<script>` HTML literal renderizada no servidor — usar o componente `<Script>` do `next/script` com estratégia `afterInteractive` NÃO funciona, porque ele injeta via JS no cliente e não aparece no HTML bruto que a verificação da Travelpayouts lê; (b) o script só passa na validação de domínio (`config is not valid` é o erro contrário) quando rodando no domínio público registrado (`tarifly.vercel.app`), nunca em `localhost`; (c) editar esse arquivo (`layout.tsx`) fica sujeito a bloqueio do classificador de segurança do Claude Code quando a mudança introduz o conteúdo do script de terceiro (domínio `emrld.ltd`) — nesses casos o usuário precisa aplicar a edição manualmente ou fazer o commit/push ele mesmo.
12. **Mudança de estratégia**: buscador "cru" sem conteúdo não ranqueia no Google nem converte — esse modelo de afiliados só funciona bem quando tem conteúdo de apoio (é o que a própria Travelpayouts recomenda, e é pra isso que serve o Drive). Decisão: focar em **poucos destinos, bem trabalhados**, em vez de tentar cobrir tudo. Primeiro destino: **Orlando/EUA** (usuário já tem know-how de visto americano via outro projeto, `Automação_DS160`/`flow-visto-americano`). Criada seção `/destinos` (índice) e `/destinos/orlando` (primeiro guia: visto, época de comprar passagem, bairros pra ficar, aluguel de carro), com CTA no final linkando de volta pra busca.
13. **Sinergia identificada com outro projeto do usuário**: `rota-consular` (app separado, `rotaconsular.com.br`, ajuda brasileiros a tirar visto de turismo B1/B2 pros EUA) pode indicar o Tarifly (ou especificamente o guia de Orlando) pros usuários dele — timing perfeito, pois é gente já no processo de planejar viagem aos EUA. Ainda não implementado (é só um link externo simples entre os dois sites, não precisa integração técnica).

14. **Cluster de Orlando**: 15 artigos em `/destinos/orlando/` (visto, época, passagem, hospedagem, parques, carro, chip, seguro, custos etc.), escritos em 13/09/2026 (todos com a mesma data de publicação, que vem do Git).
15. **SEO técnico (15/out/2026)**: `sitemap.ts` automático, `robots.ts`, canonical no domínio `tarifly.com.br`, schema.org (Article + BreadcrumbList) em todos os artigos, e depois `datePublished`/`dateModified`/`image`.
16. **Seção "Guias" virou "Blog"** (menu e índice). URLs `/destinos/...` mantidas (mudar quebraria o que já foi mandado ao Google). Datas de publicação visíveis e lista central `posts.ts`. Motivo: o Booking.com exige "blog ativo e atualizado".
17. **Visual editorial do blog** (inspirado num modelo do Canva): bege `#F5EEE4`, marrom `#3A2A1F`, terracota `#B4572F`, areia `#C9A98A`, marrom médio `#8A6B4F`, oliva `#6F7A55`; títulos na fonte Fraunces. Aplicado **só em `/destinos/**`** (home e busca continuam azul/laranja), sobrescrevendo variáveis CSS no wrapper `.blog-theme` (`app/globals.css` + `app/destinos/layout.tsx`).
18. **Artigos novos (out/2026)**: `outlets-em-orlando` (15/10), `roteiro-7-dias` (15/10), `orlando-com-criancas` (16/10), `supermercado-em-orlando` (16/10). Total: **19 artigos**, todos com capa.
19. **Capas** geradas pelo usuário no ChatGPT, em PNG, convertidas por mim para JPG 1600x900 (~250 KB) em `public/blog/`. Estilo padrão: fotografia editorial, luz dourada, tons quentes e suaves, 16:9, sem texto, sem logotipo, sem personagem de parque, pessoas de costas.
20. **Seção "Destaques"** no índice do blog (6 artigos fixos): `quanto-custa-uma-viagem`, `roteiro-7-dias`, `melhor-epoca-para-viajar`, `quando-comprar-passagem`, `onde-ficar-em-orlando`, `ingressos-dos-parques`. Escolhidos pela intenção de busca provável, **ainda sem dados reais**.
21. **Push**: o `gh` estava logado na conta errada (`2ntraveloficial-coder`, erro 403). Funciona logado como `tariflyoficial-tech` (`gh auth status` mostra qual está ativa).

22. **Chamada pro visto americano (16/10/2026)**: componente `app/components/VistoCTA.tsx`, **uma única** no fim de cada artigo de Orlando e do guia, logo abaixo do `BuscarCTA`. Modelo menor e mais leve que o de passagem, com as cores da bandeira dos EUA (faixa azul `#0A3161` e vermelha `#B31942` no topo, botão azul), link `https://rotaconsular.com.br/` em nova aba (`rel="noopener noreferrer"`). Antes havia também uma versão no meio dos artigos; foi removida a pedido. As seções de visto do guia (`orlando/page.tsx`) e de `erros-comuns` também linkam a Rota Consular no texto.
23. **Bloco "Mais lidas" (16/10/2026)**: `app/components/MaisLidas.tsx`, 3 cards com capa no fim de cada artigo, acima do "Veja também". Lista manual `maisLidasSlugs` em `app/lib/posts.ts` (quanto-custa-uma-viagem, onde-ficar-em-orlando, quando-comprar-passagem, roteiro-7-dias, melhor-epoca-para-viajar); mostra os 3 primeiros que não sejam o artigo atual. **Sem dados reais de leitura**: trocar pelos mais lidos de verdade quando houver Search Console/Analytics. Cada artigo recebe `<MaisLidas slug="..." />` (o guia principal `orlando/page.tsx` não tem).
24. **Menu do topo da home (16/10/2026)**: `app/page.tsx`. Cabeçalho sticky, logo centralizado e links centralizados logo abaixo, "Blog" em botão laranja de destaque; os links agora aparecem também no celular (antes ficavam escondidos). Âncoras `#busca` e `#como-funciona` com `scroll-mt-32` por causa do cabeçalho fixo. O cabeçalho do layout do blog (`app/destinos/layout.tsx`, fundo bege) **não** foi alterado.
25. **Commits do dia (16/10/2026)**: `a6b1d44` e `276a0d7` (chamadas de visto), `635e08d` (Mais lidas), `ab5437f` (menu da home). Tudo na `main` e publicado.

## Blog: como funciona e como publicar um artigo novo

Tudo sai de `app/lib/posts.ts` (índice, datas, capas, sitemap, schema.org). Passo a passo:

1. Criar `app/destinos/orlando/<slug>/page.tsx` copiando a estrutura de um artigo existente (ex.: `outlets-em-orlando`): `metadata` (title terminando em " — Tarifly" + description), `<ArticleJsonLd metadata={metadata} path="/destinos/orlando/<slug>" />`, `<PostMeta slug="<slug>" />` logo abaixo do subtítulo, `BuscarCTA` no meio e no fim, links internos pros artigos relacionados.
2. Adicionar a entrada **no topo** do array em `posts.ts`: `slug`, `destino`, `titulo`, `descricao`, `categoria` ("Orlando · Tema"), `data` (AAAA-MM-DD de hoje). Quando houver capa: `imagem: "/blog/<slug>.jpg"` e `imagemAlt` (começar com "Ilustração de...", pois as imagens são geradas por IA).
3. Adicionar o artigo na lista `artigosRelacionados` de `app/destinos/orlando/page.tsx` e linkar a partir de 1-2 artigos relacionados. No fim do artigo, manter esta ordem: `BuscarCTA`, `VistoCTA`, `<MaisLidas slug="<slug>" />` e o "Veja também".
4. **Capa**: usuário salva `public/blog/<slug>.png` (às vezes vem como `<slug>.png.png`); eu converto com `sharp` (`resize(1600,900,{fit:"cover"}).jpeg({quality:82,mozjpeg:true})`) para `<slug>.jpg`. Só os JPGs vão pro Git, nunca os PNGs.
5. Rodar `npx tsc --noEmit` e `npm run build`; conferir no navegador (desktop e celular); **só então pedir aprovação** pra commit e push.
6. Sem capa, o card do blog mostra um bloco de cor com a categoria (funciona, mas prefira ter a imagem).

**Cuidados de conteúdo:** não afirmar o que não foi verificado (ex.: já removi uma dica de "cupons" que não pude confirmar). Valores e regras que mudam (cota de isenção da Receita Federal hoje US$ 1.000 por pessoa por via aérea, regras de ingresso, autorização de viagem de menores) devem mandar o leitor conferir a fonte oficial. Não citar preços em dólar como fato.

## Fluxo de trabalho para ajustes futuros

1. Usuário pede o ajuste (texto, layout, campo, integração).
2. Claude edita o código local do projeto.
3. Testa no servidor local (`tarifly-dev` via `preview_start`) antes de qualquer publicação.
4. **Pergunta e espera**: Claude pergunta se pode publicar e só faz commit + `git push` na branch `main` depois da resposta explícita do usuário (o usuário costuma responder "Sim, faça o commit e o push na main"). Nunca publicar na mesma vez em que faz a pergunta.
5. Deploy de produção acontece sozinho (Vercel já está conectado ao GitHub).
6. Para conferir no navegador, usar `npm run build` + `npx next start -p <porta>` e depois encerrar o servidor.

---
*Guarde este arquivo em local seguro.*
