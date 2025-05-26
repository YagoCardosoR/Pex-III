export interface Produto {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  imagem: string;
  tamanho: string;
  categorias: string[];
}

export const produtos: Produto[] = [
  {
    id: 1,
    nome: "Encarnado",
    descricao: "Ilustração autoral de um demônio vermelho — intenso, expressivo e forjado nas chamas.",
    preco: 12.90,
    imagem: "/imgs/Encarnado.jpg",
    tamanho: "10 x 8 cm",
    categorias: ["Cartoon", "Devil"]
  },
  {
    id: 2,
    nome: "Felkraken",
    descricao: "Ilustração autoral de um gato enigmático — surreal, visceral e cuspido das profundezas abissais.",
    preco: 14.90,
    imagem: "/imgs/Felkraken.jpg",
    tamanho: "12 x 10 cm",
    categorias: ["Cartoon", "Fantasia"]
  },
  {
    id: 3,
    nome: "Porcopocalipse",
    descricao: "Ilustração autoral de um porco em êxtase — voador, pegajoso e destilado da farsa da realidade.",
    preco: 9.90,
    imagem: "/imgs/Porcopocalipse.jpg",
    tamanho: "8 x 5 cm",
    categorias: ["Cartoon", "Fantasia"]
  },
  {
    id: 4,
    nome: "Festa Nenhuma",
    descricao: "Ilustração autoral de um gato monocromático — exausto, deslocado e soterrado sob o peso de um parabéns vazio.",
    preco: 15.90,
    imagem: "/imgs/Festa Nenhuma.jpg",
    tamanho: "12 x 12 cm",
    categorias: ["Cartoon", "Minimalista"]
  },
  {
    id: 5,
    nome: "Amor Cortante",
    descricao: "Ilustração autoral de um coração ferido — realista, atravessado e preso à palavra mais difícil de engolir.",
    preco: 13.90,
    imagem: "/imgs/Amor Cortante.jpg",
    tamanho: "15 x 8 cm",
    categorias: ["Cartoon", "Fantasia"]
  },
  {
    id: 6,
    nome: "O Vigia do Abismo",
    descricao: "Ilustração autoral de um gato demoníaco — tríplice olhar, aura profana e nascido da fenda entre mundos.",
    preco: 11.90,
    imagem: "/imgs/Vigia do Abismo.jpg",
    tamanho: "10 x 10 cm",
    categorias: ["Cartoon", "Cat"]
  }
];