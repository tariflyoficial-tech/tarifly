// Lista central dos artigos do blog. Todo artigo novo entra aqui: o índice, o
// sitemap de conteúdo e as datas (visíveis e no schema.org) leem desta lista.
// `data` é a data de publicação (AAAA-MM-DD); `atualizado` só quando o texto
// for revisado de verdade.
export type Post = {
  slug: string;
  destino: string;
  titulo: string;
  descricao: string;
  categoria: string;
  data: string;
  atualizado?: string;
};

export const posts: Post[] = [
  {
    slug: "roteiro-7-dias",
    destino: "orlando",
    titulo: "Roteiro de 7 dias em Orlando",
    descricao: "Roteiro de 7 dias em Orlando, dia a dia: quais parques da Disney e da Universal encaixar, onde colocar o dia livre e como adaptar pra 5 ou 10 dias.",
    categoria: "Orlando · Roteiro",
    data: "2026-10-15",
  },
  {
    slug: "outlets-em-orlando",
    destino: "orlando",
    titulo: "Outlets em Orlando: o que saber antes de ir",
    descricao: "Guia dos outlets de Orlando: os dois Premium Outlets, quanto tempo reservar, o imposto que não está na etiqueta e como funciona a cota de isenção da Receita Federal.",
    categoria: "Orlando · Compras",
    data: "2026-10-15",
  },
  {
    slug: "alugar-carro",
    destino: "orlando",
    titulo: "Alugar carro em Orlando",
    descricao: "O que levar pra alugar carro em Orlando, se a CNH brasileira basta, e como funciona o seguro do carro alugado — o que considerar antes de fechar.",
    categoria: "Orlando · Logística",
    data: "2026-09-13",
  },
  {
    slug: "casa-de-temporada-ou-hotel",
    destino: "orlando",
    titulo: "Casa de temporada ou hotel",
    descricao: "Prós e contras de ficar numa casa de temporada com piscina ou num hotel tradicional em Orlando, e pra qual perfil de viagem cada opção faz mais sentido.",
    categoria: "Orlando · Hospedagem",
    data: "2026-09-13",
  },
  {
    slug: "chip-e-internet",
    destino: "orlando",
    titulo: "Chip ou eSIM pra Orlando",
    descricao: "eSIM, chip físico americano ou Wi-Fi portátil: as opções de internet pra usar em Orlando e qual costuma ser mais prática pra cada tipo de viagem.",
    categoria: "Orlando · Logística",
    data: "2026-09-13",
  },
  {
    slug: "como-economizar",
    destino: "orlando",
    titulo: "Como economizar sem abrir mão dos parques",
    descricao: "Onde dá pra cortar custo numa viagem pra Orlando sem abrir mão da Disney e da Universal — hospedagem, alimentação, compras e passagem.",
    categoria: "Orlando · Orçamento",
    data: "2026-09-13",
  },
  {
    slug: "disney-ou-universal",
    destino: "orlando",
    titulo: "Disney ou Universal: qual escolher",
    descricao: "Se sua viagem pra Orlando só tem tempo pra um parque, veja as diferenças entre Disney e Universal pra escolher de acordo com o perfil do grupo.",
    categoria: "Orlando · Parques",
    data: "2026-09-13",
  },
  {
    slug: "erros-comuns",
    destino: "orlando",
    titulo: "Erros comuns de quem vai pela primeira vez",
    descricao: "Os erros mais frequentes de quem vai pela primeira vez a Orlando — e como evitar cada um antes de fechar passagem, hotel ou ingresso.",
    categoria: "Orlando · Planejamento",
    data: "2026-09-13",
  },
  {
    slug: "fora-dos-parques",
    destino: "orlando",
    titulo: "Orlando fora dos parques",
    descricao: "O que fazer em Orlando sem entrar em parque temático — day off de descanso, compras e passeios gratuitos ou baratos pra intercalar com os dias de Disney e Universal.",
    categoria: "Orlando · Parques",
    data: "2026-09-13",
  },
  {
    slug: "ingressos-dos-parques",
    destino: "orlando",
    titulo: "Ingressos dos parques: quando comprar",
    descricao: "Comprar o ingresso dos parques de Orlando antes de viajar ou na chegada, e se vale a pena arriscar revenda ou promoção de terceiros.",
    categoria: "Orlando · Parques",
    data: "2026-09-13",
  },
  {
    slug: "melhor-epoca-para-viajar",
    destino: "orlando",
    titulo: "Melhor época pra viajar pra Orlando",
    descricao: "Quando ir pra Orlando pra fugir da multidão e pagar menos: clima mês a mês, época de férias escolares americanas e os períodos mais caros do ano.",
    categoria: "Orlando · Planejamento",
    data: "2026-09-13",
  },
  {
    slug: "onde-ficar-em-orlando",
    destino: "orlando",
    titulo: "Onde ficar em Orlando (guia de bairros)",
    descricao: "Lake Buena Vista, International Drive ou Kissimmee? Guia detalhado dos bairros de Orlando pra escolher onde ficar de acordo com seu roteiro e orçamento.",
    categoria: "Orlando · Hospedagem",
    data: "2026-09-13",
  },
  {
    slug: "quando-comprar-passagem",
    destino: "orlando",
    titulo: "Quando comprar passagem pra Orlando",
    descricao: "Com quantos meses de antecedência comprar passagem pra Orlando, como o preço se comporta ao longo do tempo e quando vale a pena esperar ou não.",
    categoria: "Orlando · Passagem aérea",
    data: "2026-09-13",
  },
  {
    slug: "quanto-custa-uma-viagem",
    destino: "orlando",
    titulo: "Quanto custa uma viagem pra Orlando",
    descricao: "As categorias de gasto que realmente pesam numa viagem pra Orlando — passagem, hospedagem, ingresso, carro e alimentação — e onde dá pra cortar sem perder a viagem.",
    categoria: "Orlando · Orçamento",
    data: "2026-09-13",
  },
  {
    slug: "quantos-dias-ficar",
    destino: "orlando",
    titulo: "Quantos dias ficar em Orlando",
    descricao: "Quantos dias reservar pra cada parque de Orlando e um roteiro de referência pra quem tem uma semana, pra não sair correndo de atração em atração.",
    categoria: "Orlando · Planejamento",
    data: "2026-09-13",
  },
  {
    slug: "seguro-viagem",
    destino: "orlando",
    titulo: "Seguro viagem pra Orlando",
    descricao: "O seguro viagem é exigido pro visto americano? O que ele cobre de verdade em Orlando e por que vale a pena mesmo não sendo obrigatório.",
    categoria: "Orlando · Logística",
    data: "2026-09-13",
  },
  {
    slug: "voo-direto-ou-conexao",
    destino: "orlando",
    titulo: "Voo direto ou com conexão",
    descricao: "Quando vale a pena economizar num voo com conexão pra Orlando e quando o voo direto compensa o preço mais alto — o que considerar antes de decidir.",
    categoria: "Orlando · Passagem aérea",
    data: "2026-09-13",
  },
];

export function getPost(destino: string, slug: string): Post | undefined {
  return posts.find((p) => p.destino === destino && p.slug === slug);
}

export function formatarData(iso: string): string {
  return new Date(`${iso}T12:00:00`).toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
