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
  // Foto de capa em public/blog/ (ex.: "/blog/roteiro-7-dias.jpg"). Sem ela, o
  // blog mostra um bloco de cor no lugar.
  imagem?: string;
  imagemAlt?: string;
};

export const posts: Post[] = [
  {
    slug: "supermercado-em-orlando",
    destino: "orlando",
    titulo: "Supermercado em Orlando: onde comprar e o que levar pra casa",
    descricao: "Onde fazer as compras do dia a dia em Orlando: diferenças entre Publix, Walmart e Target, o que comprar na chegada, como economizar nas refeições e o que levar do Brasil.",
    categoria: "Orlando · Orçamento",
    data: "2026-10-16",
  },
  {
    slug: "orlando-com-criancas",
    destino: "orlando",
    titulo: "Orlando com crianças: o que saber antes de ir",
    descricao: "O que saber antes de ir pra Orlando com crianças: documentos e autorização de viagem, altura mínima nas atrações, ritmo dos dias, cadeirinha no carro e onde ficar.",
    categoria: "Orlando · Família",
    data: "2026-10-16",
    imagem: "/blog/orlando-com-criancas.jpg",
    imagemAlt:
      "Ilustração de uma família com duas crianças de costas, andando de mãos dadas por uma calçada ensolarada com palmeiras em Orlando",
  },
  {
    slug: "roteiro-7-dias",
    destino: "orlando",
    titulo: "Roteiro de 7 dias em Orlando",
    descricao: "Roteiro de 7 dias em Orlando, dia a dia: quais parques da Disney e da Universal encaixar, onde colocar o dia livre e como adaptar pra 5 ou 10 dias.",
    categoria: "Orlando · Roteiro",
    data: "2026-10-15",
    imagem: "/blog/roteiro-7-dias.jpg",
    imagemAlt:
      "Ilustração de uma família de costas olhando um lago em Orlando ao pôr do sol, com parques ao fundo",
  },
  {
    slug: "outlets-em-orlando",
    destino: "orlando",
    titulo: "Outlets em Orlando: o que saber antes de ir",
    descricao: "Guia dos outlets de Orlando: os dois Premium Outlets, quanto tempo reservar, o imposto que não está na etiqueta e como funciona a cota de isenção da Receita Federal.",
    categoria: "Orlando · Compras",
    data: "2026-10-15",
    imagem: "/blog/outlets-em-orlando.jpg",
    imagemAlt:
      "Ilustração de uma família caminhando com sacolas de compras em um outlet de Orlando ao pôr do sol",
  },
  {
    slug: "alugar-carro",
    destino: "orlando",
    titulo: "Alugar carro em Orlando",
    descricao: "O que levar pra alugar carro em Orlando, se a CNH brasileira basta, e como funciona o seguro do carro alugado — o que considerar antes de fechar.",
    categoria: "Orlando · Logística",
    data: "2026-09-13",
    imagem: "/blog/alugar-carro.jpg",
    imagemAlt:
      "Ilustração de uma família guardando as malas no porta-malas de um SUV de aluguel numa rua com palmeiras em Orlando",
  },
  {
    slug: "casa-de-temporada-ou-hotel",
    destino: "orlando",
    titulo: "Casa de temporada ou hotel",
    descricao: "Prós e contras de ficar numa casa de temporada com piscina ou num hotel tradicional em Orlando, e pra qual perfil de viagem cada opção faz mais sentido.",
    categoria: "Orlando · Hospedagem",
    data: "2026-09-13",
    imagem: "/blog/casa-de-temporada-ou-hotel.jpg",
    imagemAlt:
      "Ilustração de uma casa de temporada com piscina e palmeiras ao entardecer, com um hotel ao fundo",
  },
  {
    slug: "chip-e-internet",
    destino: "orlando",
    titulo: "Chip ou eSIM pra Orlando",
    descricao: "eSIM, chip físico americano ou Wi-Fi portátil: as opções de internet pra usar em Orlando e qual costuma ser mais prática pra cada tipo de viagem.",
    categoria: "Orlando · Logística",
    data: "2026-09-13",
    imagem: "/blog/chip-e-internet.jpg",
    imagemAlt:
      "Ilustração de uma mão segurando um celular com mapa de rota numa calçada com palmeiras em Orlando",
  },
  {
    slug: "como-economizar",
    destino: "orlando",
    titulo: "Como economizar sem abrir mão dos parques",
    descricao: "Onde dá pra cortar custo numa viagem pra Orlando sem abrir mão da Disney e da Universal — hospedagem, alimentação, compras e passagem.",
    categoria: "Orlando · Orçamento",
    data: "2026-09-13",
    imagem: "/blog/como-economizar.jpg",
    imagemAlt:
      "Ilustração de uma família fazendo um lanche numa mesa ao ar livre, com garrafas reutilizáveis e montanhas-russas ao fundo",
  },
  {
    slug: "disney-ou-universal",
    destino: "orlando",
    titulo: "Disney ou Universal: qual escolher",
    descricao: "Se sua viagem pra Orlando só tem tempo pra um parque, veja as diferenças entre Disney e Universal pra escolher de acordo com o perfil do grupo.",
    categoria: "Orlando · Parques",
    data: "2026-09-13",
    imagem: "/blog/disney-ou-universal.jpg",
    imagemAlt:
      "Ilustração de uma família diante de um caminho que se divide entre torres de conto de fadas e uma montanha-russa com um globo gigante",
  },
  {
    slug: "erros-comuns",
    destino: "orlando",
    titulo: "Erros comuns de quem vai pela primeira vez",
    descricao: "Os erros mais frequentes de quem vai pela primeira vez a Orlando — e como evitar cada um antes de fechar passagem, hotel ou ingresso.",
    categoria: "Orlando · Planejamento",
    data: "2026-09-13",
    imagem: "/blog/erros-comuns.jpg",
    imagemAlt:
      "Ilustração de uma família cansada sentada num banco, com mochilas e um mapa aberto, sob o sol forte de Orlando",
  },
  {
    slug: "fora-dos-parques",
    destino: "orlando",
    titulo: "Orlando fora dos parques",
    descricao: "O que fazer em Orlando sem entrar em parque temático — day off de descanso, compras e passeios gratuitos ou baratos pra intercalar com os dias de Disney e Universal.",
    categoria: "Orlando · Parques",
    data: "2026-09-13",
    imagem: "/blog/fora-dos-parques.jpg",
    imagemAlt:
      "Ilustração de um casal caminhando de mãos dadas à beira de um lago ao pôr do sol, com cafés e luzinhas acesas",
  },
  {
    slug: "ingressos-dos-parques",
    destino: "orlando",
    titulo: "Ingressos dos parques: quando comprar",
    descricao: "Comprar o ingresso dos parques de Orlando antes de viajar ou na chegada, e se vale a pena arriscar revenda ou promoção de terceiros.",
    categoria: "Orlando · Parques",
    data: "2026-09-13",
    imagem: "/blog/ingressos-dos-parques.jpg",
    imagemAlt:
      "Ilustração de uma mão segurando ingressos coloridos diante da entrada de um parque temático",
  },
  {
    slug: "melhor-epoca-para-viajar",
    destino: "orlando",
    titulo: "Melhor época pra viajar pra Orlando",
    descricao: "Quando ir pra Orlando pra fugir da multidão e pagar menos: clima mês a mês, época de férias escolares americanas e os períodos mais caros do ano.",
    categoria: "Orlando · Planejamento",
    data: "2026-09-13",
    imagem: "/blog/melhor-epoca-para-viajar.jpg",
    imagemAlt:
      "Ilustração de um casal de costas caminhando com malas sob um guarda-chuva, numa chuva leve ao pôr do sol em Orlando",
  },
  {
    slug: "onde-ficar-em-orlando",
    destino: "orlando",
    titulo: "Onde ficar em Orlando (guia de bairros)",
    descricao: "Lake Buena Vista, International Drive ou Kissimmee? Guia detalhado dos bairros de Orlando pra escolher onde ficar de acordo com seu roteiro e orçamento.",
    categoria: "Orlando · Hospedagem",
    data: "2026-09-13",
    imagem: "/blog/onde-ficar-em-orlando.jpg",
    imagemAlt:
      "Ilustração de uma vista aérea de Orlando ao entardecer, com bairros residenciais, lagos e hotéis ao longe",
  },
  {
    slug: "quando-comprar-passagem",
    destino: "orlando",
    titulo: "Quando comprar passagem pra Orlando",
    descricao: "Com quantos meses de antecedência comprar passagem pra Orlando, como o preço se comporta ao longo do tempo e quando vale a pena esperar ou não.",
    categoria: "Orlando · Passagem aérea",
    data: "2026-09-13",
    imagem: "/blog/quando-comprar-passagem.jpg",
    imagemAlt:
      "Ilustração da asa de um avião vista pela janela, com nuvens iluminadas pelo sol nascente",
  },
  {
    slug: "quanto-custa-uma-viagem",
    destino: "orlando",
    titulo: "Quanto custa uma viagem pra Orlando",
    descricao: "As categorias de gasto que realmente pesam numa viagem pra Orlando — passagem, hospedagem, ingresso, carro e alimentação — e onde dá pra cortar sem perder a viagem.",
    categoria: "Orlando · Orçamento",
    data: "2026-09-13",
    imagem: "/blog/quanto-custa-uma-viagem.jpg",
    imagemAlt:
      "Ilustração de uma mesa com mapa-múndi, passaporte, notas de dólar, calculadora e uma xícara de café",
  },
  {
    slug: "quantos-dias-ficar",
    destino: "orlando",
    titulo: "Quantos dias ficar em Orlando",
    descricao: "Quantos dias reservar pra cada parque de Orlando e um roteiro de referência pra quem tem uma semana, pra não sair correndo de atração em atração.",
    categoria: "Orlando · Planejamento",
    data: "2026-09-13",
    imagem: "/blog/quantos-dias-ficar.jpg",
    imagemAlt:
      "Ilustração de uma família arrumando as malas sobre uma cama, com um mapa aberto e um calendário ao fundo",
  },
  {
    slug: "seguro-viagem",
    destino: "orlando",
    titulo: "Seguro viagem pra Orlando",
    descricao: "O seguro viagem é exigido pro visto americano? O que ele cobre de verdade em Orlando e por que vale a pena mesmo não sendo obrigatório.",
    categoria: "Orlando · Logística",
    data: "2026-09-13",
    imagem: "/blog/seguro-viagem.jpg",
    imagemAlt:
      "Ilustração de uma família de costas com malas e passaportes num saguão de aeroporto, olhando um painel de voos com um avião ao fundo",
  },
  {
    slug: "voo-direto-ou-conexao",
    destino: "orlando",
    titulo: "Voo direto ou com conexão",
    descricao: "Quando vale a pena economizar num voo com conexão pra Orlando e quando o voo direto compensa o preço mais alto — o que considerar antes de decidir.",
    categoria: "Orlando · Passagem aérea",
    data: "2026-09-13",
    imagem: "/blog/voo-direto-ou-conexao.jpg",
    imagemAlt:
      "Ilustração de uma família caminhando com malas num saguão de aeroporto, com um avião ao fundo",
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
