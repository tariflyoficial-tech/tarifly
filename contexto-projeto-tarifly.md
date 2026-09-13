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
| Domínio próprio | `tarifly.com.br` — **pago** (2026-09-13), aguardando confirmação/ativação do registro; ainda não apontado pra Vercel |
| Config do servidor local (Claude Code) | `C:\Users\diret\OneDrive\Documentos\Claude_Code\.claude\launch.json`, entrada `tarifly-dev` (usa `npm --prefix <caminho> run dev` porque o launch.json fica na raiz da sessão, não dentro da pasta do projeto) |
| Identidade Git configurada neste repo | nome "Alex", e-mail `55digitaloficial@gmail.com` (config local do repo, não global) |

⚠️ **Nota sobre a URL de deployment direta**: URLs tipo `tarifly-xxxxx-nerd14.vercel.app` (deployment específico) pedem login — é a proteção padrão da Vercel. Use sempre `tarifly.vercel.app` (alias estável) até o domínio próprio estar no ar.

## Stack técnica

- **Next.js** (App Router, TypeScript, Tailwind CSS) — mesma linha de stack do 2ntravel-proposta, mas projeto **totalmente separado** (sem Prisma/banco de dados por enquanto, não precisa).
- Sem dark mode automático (removido de propósito — no 2ntravel-proposta isso já causou bug de texto invisível; aqui nem foi habilitado).
- Cores de marca em `app/globals.css`: `--brand: #0f3d73` (azul), `--accent: #ff6a3d` (laranja).

## Estrutura de páginas/componentes

- `app/page.tsx` — landing page: header com logo+tagline, hero, widget de busca, 3 cards de diferenciais, footer com aviso de afiliado.
- `app/components/SearchWidget.tsx` — formulário de busca com abas **Passagens** (origem, destino, ida, volta, passageiros) e **Hospedagem** (destino, check-in, check-out, hóspedes). Client component.
- `app/layout.tsx` — metadata (title/description) e fonte.

## Modelo de negócio (Travelpayouts)

- **Voos** → via **Aviasales** (motor de busca de voos), já funcionando com marker real (`777208`).
- **Hospedagem** → Hotellook **não existe mais** (descontinuado em out/2025). Alternativa em andamento: programa Booking.com dentro da Travelpayouts, aguardando aprovação.
- Fluxo: usuário busca no Tarifly → clica num resultado → é redirecionado pro site do vendedor real (companhia aérea ou agência/OTA, decidido pelo próprio Aviasales/Hotellook conforme melhor preço) → compra e pagamento acontecem lá, fora do Tarifly.
- Comissão paga mensalmente pelo Travelpayouts, consolidada (não precisa cobrar nada de cada parceiro individualmente).
- **Responsabilidade do Tarifly**: nenhuma sobre a venda em si (pagamento, emissão, cancelamento, reembolso são do vendedor final). Mas precisa manter: (1) transparência/disclaimer de afiliado (já no footer), (2) política de privacidade (LGPD) se coletar dados do usuário.
- **Considerado mas descartado por ora**: API própria/direta do Booking.com — reservada a parceiros de alto volume de reservas, processo de aprovação em várias etapas; não é viável como ponto de partida.
- **Sobre "ser tão potente quanto o Skyscanner"**: não é a mesma tecnologia. Skyscanner é empresa independente (grupo Trip.com); o Tarifly usa a tecnologia Aviasales/Hotellook via Travelpayouts, que é boa mas não idêntica em cobertura/algoritmo ao Skyscanner. Curiosidade: o Skyscanner também aparece como um dos programas de afiliados dentro da própria rede Travelpayouts, então dá pra somar como fonte extra futuramente.

## O que falta

1. **Hospedagem**: aguardando aprovação do programa Booking.com na Travelpayouts. Quando aprovar, implementar o link de afiliado (formato `https://tp.media/r?marker=X&p=Y&u=<url-encoded>`, precisa também de um `aid` específico da Booking.com — ver artigo "How to make Booking.com tab open automatically" da Travelpayouts).
2. **Propagação do domínio `tarifly.com.br`** — DNS já configurado (Cloudflare → Vercel), só falta terminar de propagar.
3. **Mais guias de destino** — seguindo o padrão de `/destinos/orlando`, sempre "poucos e bem feitos" em vez de muitos rasos.
4. Considerar ativar o Travelpayouts Drive de verdade (hoje só está instalado pra passar na verificação de onboarding) assim que houver conteúdo suficiente pra ele analisar.
5. Implementar o link cruzado do `rota-consular` apontando pro Tarifly (ver histórico, item 13).

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

## Fluxo de trabalho para ajustes futuros

1. Usuário pede o ajuste (texto, layout, campo, integração).
2. Claude edita o código local do projeto.
3. Testa no servidor local (`tarifly-dev` via `preview_start`) antes de qualquer publicação.
4. Com aprovação do usuário, faz commit + `git push` na branch `main`.
5. Deploy de produção acontece sozinho (Vercel já está conectado ao GitHub).

---
*Guarde este arquivo em local seguro.*
