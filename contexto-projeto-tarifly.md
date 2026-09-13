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

- **Voos** → via **Aviasales** (motor de busca de voos)
- **Hospedagem** → via **Hotellook** (inclui inventário que também aparece em Booking.com, Agoda, etc., redistribuído)
- Fluxo: usuário busca no Tarifly → clica num resultado → é redirecionado pro site do vendedor real (companhia aérea ou agência/OTA, decidido pelo próprio Aviasales/Hotellook conforme melhor preço) → compra e pagamento acontecem lá, fora do Tarifly.
- Comissão paga mensalmente pelo Travelpayouts, consolidada (não precisa cobrar nada de cada parceiro individualmente).
- **Responsabilidade do Tarifly**: nenhuma sobre a venda em si (pagamento, emissão, cancelamento, reembolso são do vendedor final). Mas precisa manter: (1) transparência/disclaimer de afiliado (já no footer), (2) política de privacidade (LGPD) se coletar dados do usuário.
- **Considerado mas descartado por ora**: API própria/direta do Booking.com — reservada a parceiros de alto volume de reservas, processo de aprovação em várias etapas; não é viável como ponto de partida.
- **Sobre "ser tão potente quanto o Skyscanner"**: não é a mesma tecnologia. Skyscanner é empresa independente (grupo Trip.com); o Tarifly usa a tecnologia Aviasales/Hotellook via Travelpayouts, que é boa mas não idêntica em cobertura/algoritmo ao Skyscanner. Curiosidade: o Skyscanner também aparece como um dos programas de afiliados dentro da própria rede Travelpayouts, então dá pra somar como fonte extra futuramente.

## O que falta pra ficar funcional de verdade

1. **Criar conta na Travelpayouts** e pegar o token de API (cadastro grátis, imediato — falta o usuário fazer).
2. **Conectar o botão "Buscar"** às APIs do Aviasales (voos) e Hotellook (hospedagem) — hoje o `SearchWidget.tsx` só mostra um alerta de "em breve" (marcado como `TODO` no código).
3. **Apontar o domínio `tarifly.com.br`** assim que o registro for aprovado — Vercel + Cloudflare/registrador, mesmo fluxo já usado no 2ntravel-proposta.
4. Página de política de privacidade (LGPD) antes de coletar qualquer dado de usuário.

## Histórico do que já foi feito

1. Ideia inicial veio de uma pesquisa no Gemini sobre monetização por afiliados de viagem (Travelpayouts, Skyscanner API, Booking.com Affiliate).
2. Avaliado e descartado: API própria do Booking.com (exige alto volume/aprovação), branding como extensão da 2N Travel (risco de confundir clientes da agência).
3. Decidido: marca independente, sem nome da empresa, focada em "geração internet"/autoatendimento.
4. Nome escolhido: **Tarifly** (checado disponibilidade real via RDAP do Registro.br — `.com.br` estava livre). Registro do domínio já solicitado pelo usuário, aguardando aprovação.
5. Projeto Next.js criado localmente, landing page + widget de busca (abas Passagens/Hospedagem) construídos e testados (desktop + mobile) no navegador local.
6. Repositório GitHub criado pelo usuário (`tariflyoficial-tech/tarifly`); código commitado e enviado (`git push`) depois de logar o `gh` CLI com a conta certa.
7. Projeto conectado à Vercel (conta `tariflyoficial-tech`, time `nerd14`); deploy automático confirmado funcionando em `tarifly.vercel.app`.

## Fluxo de trabalho para ajustes futuros

1. Usuário pede o ajuste (texto, layout, campo, integração).
2. Claude edita o código local do projeto.
3. Testa no servidor local (`tarifly-dev` via `preview_start`) antes de qualquer publicação.
4. Com aprovação do usuário, faz commit + `git push` na branch `main`.
5. Deploy de produção acontece sozinho (Vercel já está conectado ao GitHub).

---
*Guarde este arquivo em local seguro.*
